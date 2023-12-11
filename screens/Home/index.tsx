import {View, ActivityIndicator, useWindowDimensions} from 'react-native';
import YoutubeIFrame from 'react-native-youtube-iframe';

import {styles, VIDEO_HEIGHT, SCREEN_SPACE} from './styles';
import {useState} from 'react';

export function Home() {
  const [videoReady, setVieoReady] = useState(false);
  const {width} = useWindowDimensions();
  const videoWidth = width - SCREEN_SPACE * 2;

  return (
    <View style={styles.container}>
      <View style={styles.player}>
        <YoutubeIFrame
          videoId="0GOUF8vNqzE"
          height={videoReady ? VIDEO_HEIGHT : 0}
          width={videoWidth}
          onReady={() => setVieoReady(true)}
        />
        {!videoReady && <ActivityIndicator color="red" />}
      </View>
    </View>
  );
}
