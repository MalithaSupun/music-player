import { FlatList } from 'react-native'
import library from '@/assets/data/library.json'
import { TrackListItem } from './TrackListitem'
import { View } from 'react-native'
import { utilsStyles } from '@/styles'
import Track from 'react-native-track-player'

export type TrackListProps = Partial<FlatList<Track>> & {
	tracks: Track[]
}

const itemDivider = () => (
	<View style={{...utilsStyles.itemSeparator,marginVertical:9,marginLeft:60}} />
)

const handleTrackSelect = (track: Track) =>{
	console.log(track)
}

export const TrackList = ({ tracks,...flatlistProps}: TrackListProps) => {
	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{paddingTop:10, paddingBottom:128}}
			ListFooterComponent={itemDivider}
			ItemSeparatorComponent={itemDivider}
			renderItem={({ item: track }) =>  <TrackListItem track={track}onTrackSelect={handleTrackSelect}/>}
			{...flatlistProps}
		/>
	)
}