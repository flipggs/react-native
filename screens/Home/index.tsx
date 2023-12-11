import {
  View,
  ActivityIndicator,
  useWindowDimensions,
  Alert,
} from 'react-native';
import YoutubeIFrame, {PLAYER_STATES} from 'react-native-youtube-iframe';

import {styles, VIDEO_HEIGHT, SCREEN_SPACE} from './styles';
import {useState} from 'react';

export function Home() {
  const [videoReady, setVieoReady] = useState(false);
  const {width} = useWindowDimensions();
  const videoWidth = width - SCREEN_SPACE * 2;

  const onChangeState = (state: string) => {
    if (state === PLAYER_STATES.ENDED) {
      Alert.alert('E ai curtiu?', 'Valeu');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.player}>
        <YoutubeIFrame
          videoId="0GOUF8vNqzE"
          height={videoReady ? VIDEO_HEIGHT : 0}
          width={videoWidth}
          onReady={() => setVieoReady(true)}
          onChangeState={onChangeState}
        />
        {!videoReady && <ActivityIndicator color="red" />}
      </View>
    </View>
  );
}
