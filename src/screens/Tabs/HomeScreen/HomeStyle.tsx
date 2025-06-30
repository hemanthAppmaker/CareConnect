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
  MainText: {
    color: '#D3D3D3',
    fontSize: 26,
    fontWeight: 'bold',
  },
  DescText: {
    color: '#808080',
    fontSize: 16,
  },
  subText: {
    color: '#808080',
    fontSize: 17,
  },
  amount: {
    color: '#DCDCDC',
    fontSize: 34,
    fontWeight: 'bold',
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
  list: {
    padding: 8,
  },
  card: {
    height: 170,
    borderRadius: 20,
    marginBottom: 16,
    justifyContent: 'center',
    paddingHorizontal: 20,
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
  upcomingContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
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
});
export default styles;
