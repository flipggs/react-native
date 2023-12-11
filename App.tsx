import React from 'react';
import {Home} from './screens/Home';
import {StatusBar} from 'react-native';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <Home />
    </>
  );
}

export default App;
