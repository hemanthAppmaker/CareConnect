import { StyleSheet } from 'react-native';
import Display from '../../../Utils';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  profileContainer: {
    marginVertical: 20,
    marginTop: 40,
    borderRadius: 12,
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: Display.setWidth(90),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  imageContainer: {
    backgroundColor: '#e0d6ff',
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  ProfileText: {
    fontSize: 23,
    fontWeight: 'semibold',
    color: '#fff',
  },
  DetailsContainer: {
    marginLeft: 20,
  },
  mainText: {
    fontSize: 22,
    fontWeight: '600',
  },
  descText: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#808080',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  row1: {
    backgroundColor: '#ade6ad',
    marginRight: 10,
    padding: 7,
    borderRadius: 40,
  },
  camerIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#3d5497',
    borderRadius: 50,
    padding: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
    width: Display.setWidth(90),
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  tabs: {
    padding: 10,
    borderRadius: 12,
  },
});
export default styles;
