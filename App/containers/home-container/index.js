import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Text, FlatList, Button } from 'react-native'
import { Header, Icon, HeaderButton, HeaderIcon } from '@app/components'
import { NavigationService } from '@app/navigations'
import { useSelector, useDispatch } from 'react-redux'
import Sound from 'react-native-sound';
import { orderBy } from 'lodash'
import { RecordingModal, PlayerModal, } from '@app/modals'
import RecordedItem from './RecordedItem'

const Home = (props) => {

    const recordings = useSelector(state => state.recordings)
    const [isNewRecording, setIsNewRecording] = useState(false)
    const [sortedRecordings, setSortedRecordings] = useState([])

    const [selectedAudio, setSelectedAudio] = useState(null)
    const [showPlayerScreen, setShowPlayerScreen] = useState(false)

    useEffect(() => {
        const sortedArray = orderBy(recordings, (item) => item.time, 'desc')
        setSortedRecordings(sortedArray)
    }, [recordings])


    renderEachRecording = (item) => {
        return <RecordedItem
            item={item}
            onselect={() => {
                setSelectedAudio(item)
                setShowPlayerScreen(true)
            }}
        />
    }

    recordingCompleted = () => {
        console.log("recording completed")
        setIsNewRecording(false)
        setTimeout(() => {
            setShowAudioNameScreen(true)
        }, 1000);
    }

    return <View>
        <Header
            headerTitle="SimpliBot"
            statusBarHidden="false"
            rightComponent={
                <HeaderButton
                    title="LogOut"
                    onClick={() => {
                        NavigationService.reset('SplashScreen')
                    }}
                />
            }
            leftComponent={
                <HeaderIcon
                    iconName="file-plus"
                    iconType="Feather"
                    onClick={() => {
                        setIsNewRecording(true)
                    }}
                />
            }
        />
        <FlatList
            scrollEnabled={true}
            data={sortedRecordings}
            keyExtractor={(item, index) => index.toString()}
            numColumns={1}
            renderItem={({ item, index }) => this.renderEachRecording(item)}
        />

        {isNewRecording &&
            <RecordingModal
                savingName={`/record${recordings.length}.aac`}
                isVisible={isNewRecording}
                closeRecordScreen={() => setIsNewRecording(false)}
                recordingCompleted={recordingCompleted}
            />
        }

        {showPlayerScreen &&
            <PlayerModal
                isVisible={showPlayerScreen}
                title={selectedAudio.fileName}
                filepath={selectedAudio.filePath}
                onClose={() => {
                    setShowPlayerScreen(false)
                    setSelectedAudio(null)
                }}
            />

        }

    </View>
}

export default Home
