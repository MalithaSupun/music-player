import { FlatList, FlatListProps ,View , Text } from 'react-native'
import { TrackListItem } from '@/components/TrackListitem'
import { utilsStyles } from '@/styles'
import TrackPlayer, { Track } from 'react-native-track-player'
import FastImage from 'react-native-fast-image'
import { unknownTrackImageUri } from '@/constants/images'


export type TrackListProps = Partial<FlatList<Track>> & {
	tracks: Track[]
}

const itemDivider = () => (
	<View style={{...utilsStyles.itemSeparator,marginVertical:9,marginLeft:60}} />
)

export const TrackList = ({tracks, ...flatlistProps }: TrackListProps) => {
	const handleTrackSelect = async (track: Track) =>{
		await TrackPlayer.load(track)
		await TrackPlayer.play()
	}


	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{paddingTop:10, paddingBottom:128}}
			ListFooterComponent={itemDivider}
			ItemSeparatorComponent={itemDivider}
			ListEmptyComponent={<View>
				<Text style={utilsStyles.emptyContentText} >No songs Found</Text>

				<FastImage 
				source={{uri: unknownTrackImageUri, priority: FastImage.priority.normal}}
				style={utilsStyles.emptyContentImage}
				/>
			</View>}
			renderItem={({ item: track }) => ( <TrackListItem track={track}onTrackSelect={handleTrackSelect}/>)}
			{...flatlistProps}
		/>
	)
}