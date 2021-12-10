import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const Timer = () => {
  const [time, setTime] = useState({ms: 0, s: 0, m: 0, h: 0});
  const [intervalId, setIntervalId] = useState(null);

  let updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  //***handlers***

  const onStartButtonClick = () => {
    run();
    setIntervalId(setInterval(run, 10));
  };

  const onButtonStopClick = () => {
    clearInterval(intervalId);
  };

  const onButtonClearClick = () => {
    setTime({ms: 0, s: 0, m: 0, h: 0});
  };

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms: updatedMs, s: updatedS, m: updatedM, h: updatedH});
  };

  //***renders methods***

  const TimerNumbers = () => {
    return (
      <View style={styles.timerContainer}>
        <Text style={styles.timerNumbers}>
          {time.h >= 10 ? time.h : '0' + time.h}
        </Text>
        <Text style={styles.timerNumbers}>
          {time.m >= 10 ? time.m : '0' + time.m}
        </Text>
        <Text style={styles.timerNumbers}>
          {time.s >= 10 ? time.s : '0' + time.s}
        </Text>
        <Text style={styles.timerNumbers}>
          {time.ms >= 10 ? time.ms : '0' + time.ms}
        </Text>
      </View>
    );
  };

  const TimerControls = () => {};

  //***

  return (
    <View style={styles.container}>
      <TimerNumbers />
      <View style={styles.timerControlsContainer}>
        <TouchableOpacity
          style={styles.timerControls}
          onPress={onStartButtonClick}>
          <Text>START</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.timerControls}
          onPress={onButtonStopClick}>
          <Text>STOP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.timerControls}
          onPress={onButtonClearClick}>
          <Text>CLEAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Timer;
