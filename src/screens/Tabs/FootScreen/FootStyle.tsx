import { StyleSheet } from 'react-native';
import Display from '../../../Utils';

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
  continuebutton: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    backgroundColor: 'black',
    marginTop: 50,
    borderRadius: 16,
  },
  continue: {
    color: '#fff',
    fontSize: 20,
  },
});

export default styles;
