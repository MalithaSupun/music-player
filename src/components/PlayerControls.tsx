import { colors } from "@/constants/tokens";
import { ViewStyle } from "react-native";
import TrackPlayer, {useIsPlaying} from "react-native-track-player"
import { TouchableOpacity,View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type PlayerControlsProps ={
    style?:ViewStyle
}

type PlayerButtonProps= {
    style?:ViewStyle
    iconSize?: number
}

export const PlayPauseButton = ({style, iconSize}: PlayerButtonProps) => {
    const {playing} = useIsPlaying()

    return(
    <View style={[{height: iconSize},style]} >
     <TouchableOpacity
     activeOpacity={0.85}
     onPress={playing ? TrackPlayer.puse : TrackPlayer.play}
     >
        <FontAwesome name={playing ? 'pause' : 'play'} size={iconSize} color={colors.text}/>
    </TouchableOpacity>
    </View>
    )
}

export const SkipToNextButton = ({iconSize = 30}: PlayerButtonProps) => {

    return(
    <TouchableOpacity activeOpacity={0.7} onPress={ () => TrackPlayer.skipToNext()}>
        <FontAwesome name="forward" size={iconSize} color={colors.text}/>
    </TouchableOpacity>
    )
}

export const SkipToPreviousButton = ({iconSize = 30}: PlayerButtonProps) => {

    return(
    <TouchableOpacity activeOpacity={0.7} onPress={ () => TrackPlayer.skipToPrevious()}>
        <FontAwesome name="forward" size={iconSize} color={colors.text}/>
    </TouchableOpacity>
    )
}
