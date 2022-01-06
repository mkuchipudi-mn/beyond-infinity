import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import Voice, { SpeechResultsEvent, SpeechErrorEvent } from '@react-native-voice/voice';
import SearchService from '../services/Search.service';
import { mapSearchDetails } from '../utils/map';
import { NotificationsDetailsView } from '../components/NotificationsDetailsView';
import { VoiceSearchButton } from './VoiceSearchButton';
const searchService = new SearchService();

export default function VoiceSearchScreen() {
  const [result, setResult] = useState('');
  const [isListening, setIsListening] = useState<any>(false);
  const [data, setData] = useState<any>({});
  const supportedModules = ['strategy', 'formulary'];

  const [detailsIndex, setDetailsIndex] = useState(-1);
  const [loader, setLoader] = useState(false);
  const [meta, setMeta] = useState();
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const decodeMessage = (message: string) => {
    return supportedModules.includes(message.split(' ')[0].toLowerCase());
  };

  const onBackClick = () => {
    setDetailsIndex(-1);
    setMessage('');
  };
  const onPrevClick = () => {
    setDetailsIndex(detailsIndex - 1);
  };
  const onNextClick = () => {
    setDetailsIndex(detailsIndex + 1);
  };

  const onClickApprove = () => {
    setDetailsIndex(-1);
  };

  const onClickReject = () => {
    setDetailsIndex(-1);
  };

  const fetchData = async () => {
    //if (result == '') return [];
    const objDetails = require('../config/resources/search/index.json');
    const pavan = 'pavan';
    const result1 = 'strategy demo';
    const module = result1.split(' ')[0].toLowerCase();
    let { object, body } = objDetails[module];

    body = JSON.parse(
      JSON.stringify(body).replace('VALUE_PLACEHOLDER', result1.split(' ')[1].toLowerCase())
    );
    const data = await searchService.search(object, body);
    setData(data);
    setCount(data.data.length);
    let meta = [];
    if (object === 'CFStrategy') {
      meta = require(`../config/resources/strategy/DetailsPage/index.json`);
    } else if (object === 'Formulary') {
      meta = require(`../config/resources/formulary/DetailsPage/index.json`);
    }

    setMeta(meta);
    //setData(mapSearchDetails(data, meta, 0));
    return data.data;
  };

  useEffect(() => {
    function onSpeechResults(e: SpeechResultsEvent) {
      setResult('strategy demo');
      //setResult((e.value && e.value.length > 0) ? e.value[0] : '');
    }
    function onSpeechError(e: SpeechErrorEvent) {
      console.error(e);
    }
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    return function cleanup() {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  async function toggleListening() {
    try {
      if (isListening) {
        // await Voice.stop();
        //const pavan = 'pavan';
        const result1 = 'formulary pavan';
        setResult('formulary pavan');
        setIsListening(false);
        setMessage('Fetching results for \n' + result);
        setLoader(true);
        if (!decodeMessage(result1)) {
          //show banner and reset

          setMessage("Sorry I can't understand \n" + result1);
          //setResult('');
        } else {
          //fetch details and display
          const data1 = await fetchData();
          if (data1.length == 0) {
            setMessage('No results found for \n' + result);
            //display not found
          } else {
            setDetailsIndex(0);
          }
        }
      } else {
        setResult('');
        setMessage('');
        //await Voice.start("en-US");
        setIsListening(true);
      }
      setLoader(false);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      {detailsIndex < 0 && (
        <VoiceSearchButton loader={loader} message={message} toggleListening={toggleListening}></VoiceSearchButton>
      )}
      {detailsIndex >= 0 && (
        <NotificationsDetailsView
          claimDetails={mapSearchDetails(data, meta, detailsIndex)}
          onBackClick={onBackClick}
          hideButtons={true}
          headerTitle={'Results for ' + result}
          hasNext={detailsIndex < count - 1}
          hasPrev={detailsIndex > 0}
          onPrevClick={onPrevClick}
          onClickApprove={onClickApprove}
          onClickReject={onClickReject}
          onNextClick={onNextClick}
          index={detailsIndex}
          count={count}
        />
      )}
    </>
  );
}
