import React, { useState, useEffect } from 'react'
import { View, Text, Linking, TouchableOpacity, TextInput, Platform } from 'react-native'
import { Header, Icon, HeaderButton, HeaderIcon, Button, RecordingComponent, RecordingSaveComponent, ModalHeader } from '@app/components'
import { request, PERMISSIONS, check } from 'react-native-permissions';
import { metrics } from '@app/themes'
import { AudioRecorder, AudioUtils } from 'react-native-audio';
import Sound from 'react-native-sound';
import { useSelector, useDispatch } from 'react-redux'
import Actions from '../../redux/Actions'
import { now } from 'lodash';
import Modal from "react-native-modal";

const RecordingContainer = (props) => {
    const [recording, setRecording] = useState(false)
    const [currentTime, setCurrentTime] = useState(0.0)
    const [paused, setPaused] = useState(false)
    const [stoppedRecording, setStoppedRecording] = useState(false)
    const [hasPermission, setHasPermission] = useState(false)
    const [cancelRecording, setCancelRecording] = useState(false)
    const [isMicrophoneDenied, setIsMicrophoneDenied] = useState(false)
    const [showDisplayNameContent, setShowDisplayNameContent] = useState(false)
    const [audioName, setAudioName] = useState("")
    const [androidFileName, setAndroidFileName] = useState("")

    const dispatch = useDispatch()

    let audioPath = AudioUtils.DocumentDirectoryPath + props.savingName;


    prepareRecordingPath = (audioPath) => {
        AudioRecorder.prepareRecordingAtPath(audioPath, {
            SampleRate: 22050,
            Channels: 1,
            AudioQuality: "Low",
            AudioEncoding: "aac",
            AudioEncodingBitRate: 32000
        });
    }

    checkMicroPhoneStatus = (status) => {
        if (status === "denied") {
            setIsMicrophoneDenied(true)
        }
        else if (status === "blocked") {
            setIsMicrophoneDenied(true)
        }
        else if (status === "granted") {
            setIsMicrophoneDenied(false)
        }

    }
    addNewRecording = () => {
        check(PERMISSIONS.MICROPHONE).then((data => {
            if (data === "unavailable" || data === "denied") {
                requestMicroPhoneAccess()
            }
            checkMicroPhoneStatus(data)
        }))
    }

    requestMicroPhoneAccess = () => {
        request(PERMISSIONS.IOS.MICROPHONE).then((result) => {
            checkMicroPhoneStatus(result)
        });
    }

    pause = () => {
        if (!recording) {
            console.warn('Can\'t pause, not recording!');
            return;
        }

        try {
            const filePath = AudioRecorder.pauseRecording();
            setPaused(true)
        } catch (error) {
            console.error("error is", error);
        }
    }


    resume = () => {
        if (!paused) {
            console.warn('Can\'t resume, not paused!');
            return;
        }

        try {
            AudioRecorder.resumeRecording();
            setPaused(false)
        } catch (error) {
            console.error(error);
        }
    }

    stop = () => {
        if (!recording) {
            console.warn('Can\'t stop, not recording!');
            return;
        }


        try {
            const filePath = AudioRecorder.stopRecording();

            if (Platform.OS === 'android') {
                finishRecording(true, filePath);
            }
            console.log("file path is", filePath)
            setStoppedRecording(true)
            setRecording(false)
            setPaused(false)

            return filePath;
        } catch (error) {
            console.error(error);
        }
    }

    record = () => {
        console.log("recording")

        if (recording) {
            console.warn('Already recording!');
            return;
        }

        if (isMicrophoneDenied) {
            console.warn('Can\'t record, no permission granted!');
            return;
        }

        if (stoppedRecording) {
            prepareRecordingPath(audioPath);
        }

        setRecording(true)
        setPaused(false)

        try {
            const filePath = AudioRecorder.startRecording();
        } catch (error) {
            console.error(error);
        }
    }

    finishRecording = (didSucceed, filePath, fileSize) => {
        console.log(`Finished recording of duration ${currentTime} seconds at path: ${filePath} and size of ${fileSize || 0} bytes`);
        if (didSucceed) {
            console.log("is cancen recording", cancelRecording)
            if (!cancelRecording) {
                setShowDisplayNameContent(true)
            }
        }
    }


    useEffect(() => {
        // requestMicroPhoneAccess()
        AudioRecorder.requestAuthorization().then((isAuthorised) => {
            console.log('authorized', isAuthorised)
            setHasPermission(isAuthorised)
            setIsMicrophoneDenied(!isAuthorised)
            if (!isAuthorised) return;

            prepareRecordingPath(audioPath);

            AudioRecorder.onProgress = (data) => {
                console.log('onProgress', data)
                setCurrentTime(Math.floor(data.currentTime))
            };

            AudioRecorder.onFinished = (data) => {
                console.log('onFinished', data)
                // Android callback comes in the form of a promise instead.
                if (Platform.OS === 'ios') {
                    finishRecording(data.status === "OK", data.audioFileURL, data.audioFileSize);
                }
                else {
                    setAndroidFileName(data.audioFileURL)
                }
            };
        });
    }, [])

    saveRecording = () => {
        console.log("audio path is", audioPath, androidFileName)
        dispatch(Actions.saveRecordings({ fileName: audioName, filePath: audioPath, time: now(), reocrdedTime: currentTime }))
        props.closeRecordScreen()
    }

    renderMicroPhoneStatus = () => {
        if (isMicrophoneDenied === false) {
            return null
        }

        return <View style={{ padding: 20, width: '100%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
            <Icon name="unlock" type="Feather" size={40} color="#05375a" />
            <Text>This app doesnt have access to micro phone</Text>
            <Button
                title="Give permission"
                onClick={() => {
                    Linking.openURL('app-settings:');
                }}
            />
        </View>
    }

    renderRecordingComponent = () => {
        if (isMicrophoneDenied || showDisplayNameContent) {
            return null
        }
        return <RecordingComponent
                isRecording={recording}
                onPress={() => {
                    if (recording) {
                        stop()
                    }
                    else {
                        record()
                    }
                }}
            />
    }

    renderNameDisplayContent = () => {
        if (isMicrophoneDenied || !showDisplayNameContent) {
            return null
        }
        return <RecordingSaveComponent
            value={audioName}
            onChange={(text => {
                setAudioName(text)
            })}
            onSubmit={() => {
                if (audioName === "") {
                    return
                }
                else {
                    saveRecording()
                }
            }}
        />
    }

    return <ModalHeader
        isVisible={props.isVisible}
        title={showDisplayNameContent ? "Please type audio name to save!" : recording ? "your audio is recoding" : "Tap on micro phone to record"}
        onBackDropPress={() => {
            setCancelRecording(true)
            stop()
            props.closeRecordScreen()
        }}
    > 
            <View style={{ padding: 20, width: '100%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', paddingTop:40, paddingBottom:80}}>
                {renderMicroPhoneStatus()}
                {renderRecordingComponent()}
                {renderNameDisplayContent()}
            </View>
    </ModalHeader>
}

export default RecordingContainer
