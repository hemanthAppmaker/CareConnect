import { StyleSheet } from 'react-native';
import Display from '../../Utils';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  logo: {
    alignSelf:'flex-end',
    height: Display.setHeight(30),
    width: Display.setHeight(30),
    marginTop:40,
  },titleContainer:{marginTop:30,marginBottom:Display.setHeight(-11.5)},
 
  title: {
    fontSize: 32,
    marginBottom: 30,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    color: '#808080',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    // marginBottom: 15,
    color: 'black',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#7F55B1',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  bottomText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#d0d0d0',
  },
  register: {
    color: '#7F55B1',
  },
  head: {
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
    marginBottom: 10,
  },
  error:{
    color:'#FF8282',
    padding:5,
    fontSize:14,
    textTransform:'capitalize'
  }
});

export default styles;
