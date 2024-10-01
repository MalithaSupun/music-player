import { FlatList } from 'react-native'
import library from '@/assets/data/library.json'
import { TrackListItem } from './TrackListitem'
import { View } from 'react-native'
import { utilsStyles } from '@/styles'

export type TrackListProps = Partial<FlatList<unknown>>

const itemDivider = () => (
	<View style={{...utilsStyles.itemSeparator,marginVertical:9,marginLeft:60}} />
)

export const TrackList = ({...flatlistProps}: TrackListProps) => {
	return (
		<FlatList
			data={library}
			contentContainerStyle={{paddingTop:10, paddingBottom:128}}
			ListFooterComponent={itemDivider}
			ItemSeparatorComponent={itemDivider}
			renderItem={({ item: track }) => (
				<TrackListItem
					track={{
						...track,
						image: track.artwork,
					}}
				/>
			)}
			{...flatlistProps}
		/>
	)
}