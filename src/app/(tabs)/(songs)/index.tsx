import { TrackList } from "@/components/TracksList";
import { screenPadding } from "@/constants/tokens";
import { useNavigationSearch } from "@/hooks/useNavigationSearch";
import { defaultStyles } from "@/styles";
import { ScrollView, Text, View } from "react-native";

const SongsScreen = () => {
    const search = useNavigationSearch({
        searchBarOptions:{
            placeholder: 'Find in Songs'
        },
    })
    return (
        <View style={defaultStyles.container}>
            <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{paddingHorizontal:screenPadding.horizontal}}
            >
                <TrackList scrollEnabled={false}/>
            </ScrollView>
        </View>
    );
}

export default SongsScreen;
