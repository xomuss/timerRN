import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Timer from './src/components/Timer';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Timer />
    </SafeAreaView>
  );
};

export default App;
