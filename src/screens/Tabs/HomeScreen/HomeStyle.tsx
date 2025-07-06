import { StyleSheet } from 'react-native';
import Display from '../../../Utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topbar: {
    padding: 20,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 10,
  },

  MainText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  backgroundImage: {
    width: '100%',
    height: Display.setHeight(35),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
    position: 'absolute',
    top: 20,
    right: 20,
  },
  textContainer: {
    alignItems: 'flex-start',
    position: 'absolute',
    top: Display.setHeight(15),
    left: 30,
  },
  // MainText: {
  //   color: '#D3D3D3',
  //   fontSize: 26,
  //   fontWeight: 'bold',
  // },
  DescText: {
    color: '#808080',
    fontSize: 16,
  },
  Content: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: -20,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  titleText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  list: {
    paddingHorizontal: 8,
    paddingBottom: 12,
  },
  cardContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
  cardImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginBottom: 20,
  },
  cardItem2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },

  alphabetCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  alphabetText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  textSection: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 10,
  },

  nameText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  amount: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 4,
  },
  section: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingBottom: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  upcomingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  emptyText: {
    textAlign: 'center',
    paddingVertical: 20,
    color: 'gray',
    fontSize: 14,
  },
  contentSection: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    margin: 16,
    elevation: 2,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
