import { FlatList } from 'react-native'
import library from '@/assets/data/library.json'
import { TrackListItem } from './TrackListitem'
import { View } from 'react-native'
import { utilsStyles } from '@/styles'
import TrackPlayer, { Track } from 'react-native-track-player'


export type TrackListProps = Partial<FlatList<Track>> & {
	tracks: Track[]
}

const itemDivider = () => (
	<View style={{...utilsStyles.itemSeparator,marginVertical:9,marginLeft:60}} />
)

export const TrackList = ({tracks, ...flatlistProps }: TrackListProps) => {
	const handleTrackSelect = async (track: Track) =>{
		await TrackPlayer.load(track)
	}


	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{paddingTop:10, paddingBottom:128}}
			ListFooterComponent={itemDivider}
			ItemSeparatorComponent={itemDivider}
			renderItem={({ item: track }) => ( <TrackListItem track={track}onTrackSelect={handleTrackSelect}/>)}
			{...flatlistProps}
		/>
	)
}