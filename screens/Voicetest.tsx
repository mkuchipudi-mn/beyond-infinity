import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Voice, {
    SpeechResultsEvent,
    SpeechErrorEvent,
} from "@react-native-voice/voice";
import SearchService from '../services/Search.service';
import { mapSearchDetails } from "../utils/map";
import { NotificationsDetailsView } from "../components/NotificationsDetailsView";
import { FontAwesome } from "@expo/vector-icons";

export default function VoiceTest({ navigation }) {
    const [result, setResult] = useState();
    const [isListening, setIsListening] = useState(false);
    const [data, setData] = useState([]);
    const supportedModules = ['strategy'];
    const searchService = new SearchService();
    const [detailsIndex, setDetailsIndex] = useState(-1);
    const [meta, setMeta] = useState();
    const [count, setCount] = useState(0);
    const decodeMessage = (message: string) => {
        return supportedModules.includes((message.split(' ')[0]).toLowerCase());
    }

    const onBackClick = () => {
        setDetailsIndex(-1);
    };
    const onPrevClick = () => {
        setDetailsIndex(detailsIndex - 1);
    };
    const onNextClick = () => {
        setDetailsIndex(detailsIndex + 1);
    };
    const fetchData = async () => {
        const objDetails = require('../config/resources/search/index.json');
        const pavan = "pavan";
        const result1 = "strategy demo";
        const module = result1.split(' ')[0].toLowerCase();
        let { object, body } = objDetails[result1.split(' ')[0].toLowerCase()];
        body = JSON.parse(JSON.stringify(body).replace('VALUE_PLACEHOLDER', result1.split(' ')[1].toLowerCase()));
        const data = await searchService.search(object, body);
        setData(data);
        setCount(data.data.length);
        const meta = require(`../config/resources/${module}/DetailsPage/index.json`);
        setMeta(meta);
        //setData(mapSearchDetails(data, meta, 0));

    }

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
                const pavan = "pavan";
                await setResult('startegy demo');
                await setIsListening(false);
                if (!decodeMessage('strategy demo')) {
                    //show banner and reset 
                    setResult('');
                }
                else {
                    //fetch details and display
                    await fetchData();
                    if (data.length == 0) {
                        //display not found 
                    }
                    else {
                        setDetailsIndex(0);
                    }
                }

            } else {
                setResult('');
                // await Voice.start("en-US");
                setIsListening(true);
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <View >
            {detailsIndex < 0 && (
                <View style={styles.container}>
                    <Text>Press the button and start speaking.</Text>
                    <Button
                        title={isListening ? "Stop Recognizing" : "Start Recognizing"}
                        onPress={toggleListening}
                    />
                    <Text>Result:</Text>
                    <Text>{result}</Text>
                </View>)
            }
            {detailsIndex >= 0 && (
                <NotificationsDetailsView
                    claimDetails={mapSearchDetails(data, meta, detailsIndex)}
                    onBackClick={onBackClick}
                    hideButtons={true}
                    headerTitle={result}
                    hasNext={detailsIndex < count - 1}
                    hasPrev={detailsIndex > 0}
                    onPrevClick={onPrevClick}
                    onNextClick={onNextClick}
                />
            )}



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
});