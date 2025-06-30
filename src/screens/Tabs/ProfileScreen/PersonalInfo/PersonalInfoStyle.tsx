import { StyleSheet } from 'react-native';
import Display from '../../../../Utils';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    backgroundColor: '#fff',
    padding: 10,
  },
  MainText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  DescText: {
    color: '#808080',
    fontSize: 16,
  },
  subText: {
    color: '#808080',
    fontSize: 17,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  IconContainer: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 50,
    marginRight: 20,
  },
  DetailsContainer: {},
  Logout: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogoutContianer: {
    alignItems: 'center',
    marginTop: Display.setHeight(15),
  },
});

export default styles;
