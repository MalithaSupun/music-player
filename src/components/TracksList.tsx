import { FlatList } from 'react-native'
import library from '@/assets/data/library.json'
import { TrackListItem } from './TrackListitem'

export type TrackListProps = Partial<FlatList<unknown>>

export const TrackList = ({...flatlistProps}: TrackListProps) => {
	return (
		<FlatList
			data={library}
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