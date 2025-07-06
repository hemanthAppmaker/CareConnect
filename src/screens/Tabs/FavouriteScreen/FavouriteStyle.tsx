import { StyleSheet } from 'react-native';
import Display from '../../../Utils';
const styles = StyleSheet.create({
  // container: {
  //   flexDirection: 'row',
  //   margin: 30,
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   padding: 20,
  //   borderRadius: 12,
  //   backgroundColor: '#fff',
  // },
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
    marginBottom: 5,
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
  Name: {
    fontSize: 22,
    fontWeight: '800',
    color: 'black',
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
  card: {
    marginVertical: 10,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
  },
  dept: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1976d2',
    marginBottom: 8,
  },
  slotsRow: {
    flexDirection: 'row',
    marginVertical: 8,
    gap: 10,
  },
  tag: {
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  icon: {
    marginRight: 10,
  },
  detailText: {
    fontSize: 14,
    color: '#444',
    fontWeight: '500',
  },
  //returns
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: 10,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  subTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  connectionStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: 'transparent',
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  activeTab: {
    backgroundColor: '#d6edff',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
});
export default styles;
