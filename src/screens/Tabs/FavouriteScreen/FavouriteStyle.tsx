import { StyleSheet } from 'react-native';
import Display from '../../../Utils';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  Title: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
  },
  desc: {
    fontWeight: '500',
  },
  gradientBackground: {
    padding: 10,
    borderRadius: 12,
  },
  iconContainer: {},
  Textcontainer: {
    marginRight: 20,
  },
  netInfo: {
    justifyContent: 'center',
  },
  TabContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    padding: 5,
    borderRadius: 12,
     shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
    marginBottom:5
  },
  tab: {
    padding: 10,
    borderRadius: 12,
    width: Display.setWidth(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabTitle: {
    fontSize: 18,
    textTransform: 'capitalize',
    fontWeight: '600',
  },
  card: {
    margin: 10,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  Name: {
    fontSize: 22,
    fontWeight: '800',
    color: 'black',
  },
  dept: {
    fontSize: 16,
    fontWeight: 600,
    color: 'blue',
  },
  slots: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  slotContainer: {
    backgroundColor: '#f9dbfd',
    padding: 8,
    borderRadius: 40,
    marginRight: 10,
  },
  timeContainer: { backgroundColor: '#d5d8ff', padding: 8, borderRadius: 40 },
  slot: {
    fontSize: 12,
    fontWeight: '600',
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconContainertab: {
    backgroundColor: '#ffe0e2',
    padding: 5,
    borderRadius: 50,
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    fontWeight: '600',
  },
});
export default styles;
