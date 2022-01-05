import React, { useState, useEffect } from 'react';
import { Button, Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Voice, { SpeechResultsEvent, SpeechErrorEvent } from '@react-native-voice/voice';
import SearchService from '../services/Search.service';
import { mapSearchDetails } from '../utils/map';
import { NotificationsDetailsView } from '../components/NotificationsDetailsView';
import { FontAwesome } from '@expo/vector-icons';
import { VoiceSearchButton } from './VoiceSearchButton';
//import { TouchableOpacity } from "react-native-gesture-handler";

export default function VoiceSearch() {
  const [result, setResult] = useState('');
  const [isListening, setIsListening] = useState<any>(false);
  const [data, setData] = useState<any>({});
  const supportedModules = ['strategy', 'formulary'];
  const searchService = new SearchService();
  const [detailsIndex, setDetailsIndex] = useState(-1);
  const [meta, setMeta] = useState();
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const decodeMessage = (message: string) => {
    return supportedModules.includes(message.split(' ')[0].toLowerCase());
  };

  const onBackClick = () => {
    setDetailsIndex(-1);
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
    const objDetails = require('../config/resources/search/index.json');
    const pavan = 'pavan';
    const result1 = 'formulary pavan';
    const module = result1.split(' ')[0].toLowerCase();
    let { object, body } = objDetails[result1.split(' ')[0].toLowerCase()];

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
        //await Voice.stop();
        const pavan = 'pavan';
        const result1 = 'strategy demo';
        setResult('strategy demo');
        setIsListening(false);
        if (!decodeMessage(result1)) {
          //show banner and reset
          setMessage('Sorry I cant understand \n' + result);
          //setResult('');
        } else {
          //fetch details and display
          const data1 = await fetchData();
          if (data1.length == 0) {
            setMessage('Object not found\n' + result);
            //display not found
          } else {
            setDetailsIndex(0);
          }
        }
      } else {
        setResult('');
        //await Voice.start("en-US");
        setIsListening(true);
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View>
      {detailsIndex < 0 && (
        <VoiceSearchButton toggleListening={toggleListening}></VoiceSearchButton>
      )}
      {detailsIndex >= 0 && (
        <NotificationsDetailsView
          claimDetails={mapSearchDetails(data, meta, detailsIndex)}
          onBackClick={onBackClick}
          hideButtons={true}
          headerTitle={result}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
