import { TrackList } from "@/components/TracksList";
import { defaultStyles } from "@/styles";
import { ScrollView, Text, View } from "react-native";

const SongsScreen = () => {
    return (
        <View style={defaultStyles.container}>
            <ScrollView>
                <TrackList scrollEnabled={false}/>
            </ScrollView>
        </View>
    );
}

export default SongsScreen;
