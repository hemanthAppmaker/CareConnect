import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { RadialSlider } from 'react-native-radial-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Display from '../../Utils';

const FootScreen = () => {
  const [speed, setSpeed] = useState(600);
  const [checkBox, setCheckBox] = useState(true);
  const [checkBox1, setCheckBox1] = useState(false);

  const handlecheck = () => {
    if (checkBox) {
      setCheckBox(false);
    } else {
      setCheckBox(true);
    }
  };
  const handlecheck1 = () => {
    if (checkBox1) {
      setCheckBox1(false);
    } else {
      setCheckBox1(true);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Ionicons name={'add'} size={32} color={'gray'} />
      </View>
      <View style={styles.radialContainer}>
        <RadialSlider
          value={speed}
          min={0}
          subTitle="How much do you need ?"
          title=""
          unit={<Ionicons name={'flame-sharp'} size={36} color={'black'} />}
          markerLineSize={50}
          lineSpace={0}
          max={1000}
          onChange={setSpeed}
          lineColor={'#fff'}
          sliderWidth={12}
          radius={130}
          subTitleStyle={[{ fontSize: 18, fontWeight: 'semibold' }]}
          valueStyle={[{ fontSize: 50 }]}
          fixedMarker={false}
          thumbBorderWidth={1}
          thumbColor="#03045E"
          thumbRadius={12}
          isHideButtons={true}
          isHideTailText={true}
        />
        <View style={styles.checkContainer}>
          <View style={styles.columnContainer}>
            <TouchableOpacity onPress={handlecheck}>
              {checkBox ? (
                <Ionicons name={'checkmark-circle'} size={32} color={'black'} />
              ) : (
                <Ionicons name={'radio-button-off'} size={32} color={'black'} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.rowContianer}>
            <Text style={styles.MainText}>Weight Train</Text>
            <Text style={styles.DescText}>
              Arrives by 8pm tonight, deposited right into your bnk account
            </Text>
          </View>
        </View>
        <View style={styles.checkContainer}>
          <View style={styles.columnContainer}>
            <TouchableOpacity onPress={handlecheck1}>
              {checkBox1 ? (
                <Ionicons name={'checkmark-circle'} size={32} color={'black'} />
              ) : (
                <Ionicons name={'radio-button-off'} size={32} color={'black'} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.rowContianer}>
            <Text style={styles.MainText}>Cardio Workouts</Text>
            <Text style={styles.DescText}>
              Arrives by 8pm tonight, deposited right into your bnk account
            </Text>
          </View>
        </View>
        <View>
            <TouchableOpacity style={styles.continuebutton}>
                <Text style={styles.continue}>
                    Continue
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FootScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  radialContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: '#fff',
  },
  checkContainer: {
    flexDirection: 'row',
    width: Display.setWidth(70),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  columnContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  MainText: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
  },
  DescText: {
    color: '#808080',
    fontSize: 16,
  },
  rowContianer: {
    paddingBottom: 20,
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
    marginLeft: 20,
  },
  continuebutton:{
    paddingHorizontal:50,
    paddingVertical:20,
    backgroundColor:'black',
    marginTop:50,
    borderRadius:16
  },
  continue:{
    color:'#fff',
    fontSize:20
  }
});
