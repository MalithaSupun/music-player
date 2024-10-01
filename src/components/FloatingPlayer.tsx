import { unknownTrackImageUri } from '@/constants/images'
import { StyleSheet, TouchableOpacity, View, ViewProps , Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import { useActiveTrack } from 'react-native-track-player'
import { defaultStyles } from "@/styles"
import { PlayPauseButton, SkipToNextButton } from "@/components/PlayerControls"
import React from "react"

export const FloatingPlayer=({style}: ViewProps) => {
    const activeTrack = useActiveTrack()

    const displayedTrack: Track = activeTrack ?? {
        title: 'This is just a song'
    }

    if(!displayedTrack) return null

    

    return(
    <TouchableOpacity>
        <>
        <FastImage source={{
            uri: displayedTrack.artwork ?? unknownTrackImageUri
        }}
        style={StyleSheet.trackArtWorkImage}
        />
        <View style={styles.trackTitleContainer}>
            <Text style={styles.trackTitle}>{displayedTrack.title}</Text>
        </View>

        <View style={styles.trackControlsContainer}>
            <PlayPauseButton iconSize={24}/>
            <SkipToNextButton iconSize={22}/>
        </View>

        </>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    trackArtworkImage: {
		width: 40,
		height: 40,
		borderRadius: 8,
	},
    trackTitleContainer: {
		flex: 1,
		overflow: 'hidden',
		marginLeft: 10,
	},
    trackTitle: {
		...defaultStyles.text,
		fontSize: 18,
		fontWeight: '600',
		paddingLeft: 10,
	},
    trackControlsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 20,
		marginRight: 16,
		paddingLeft: 16,
	},
})