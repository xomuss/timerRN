import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  timerNumbers: {
    marginHorizontal: '1%',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'silver',
    fontSize: 24,
  },
  timerControlsContainer: {
    flex: 1,
    marginTop: 20,
  },
  timerControls: {
    width: 100,
    backgroundColor: 'lightblue',
    marginVertical: 10,
    padding: 5,
  },
});

export default styles;
