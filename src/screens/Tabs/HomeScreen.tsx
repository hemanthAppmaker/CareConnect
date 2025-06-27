import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Display from '../../Utils';

export default function MyComponent() {
  const data = [
    {
      id: '1',
      type: 'color',
      backgroundColor: '#D5D1E9',
      text: 'Total Sales',
      amount: '₹4,500',
      textColor: '#fff',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-U_uo6V7nFCh3ppvbXguwLjUwWrE310DYdmOjwIjkBe0EV3KmBgr2zFd28SEoDm8hXg4&usqp=CAU',
    },
    {
      id: '2',
      type: 'color',
      backgroundColor: '#D0E4EE',
      text: 'New Users',
      amount: '₹1,200',
      textColor: '#000',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-U_uo6V7nFCh3ppvbXguwLjUwWrE310DYdmOjwIjkBe0EV3KmBgr2zFd28SEoDm8hXg4&usqp=CAU',
    },
    {
      id: '3',
      type: 'color',
      backgroundColor: '#F3F5A9',
      text: 'Subscriptions',
      amount: '₹9,875',
      textColor: '#000',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-U_uo6V7nFCh3ppvbXguwLjUwWrE310DYdmOjwIjkBe0EV3KmBgr2zFd28SEoDm8hXg4&usqp=CAU',
    },
  ];
  const data2 = [
    {
      id: '1',
      type: 'color',
      backgroundColor: '#acd7e6',
      title:'Atlassian',
      text: 'Total Sales',
      amount: '₹4,500',
      textColor: '#fff',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-U_uo6V7nFCh3ppvbXguwLjUwWrE310DYdmOjwIjkBe0EV3KmBgr2zFd28SEoDm8hXg4&usqp=CAU',
    },
    {
      id: '2',
      type: 'color',
      backgroundColor: '#ade6ad',
      title:'Digital Ocean',
      text: 'New Users',
      amount: '₹1,200',
      textColor: '#000',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-U_uo6V7nFCh3ppvbXguwLjUwWrE310DYdmOjwIjkBe0EV3KmBgr2zFd28SEoDm8hXg4&usqp=CAU',
    },
    {
      id: '3',
      type: 'color',
      backgroundColor: '#FCE1E4',
      title:'Feridect',
      text: 'Subscriptions',
      amount: '₹9,875',
      textColor: '#000',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-U_uo6V7nFCh3ppvbXguwLjUwWrE310DYdmOjwIjkBe0EV3KmBgr2zFd28SEoDm8hXg4&usqp=CAU',
    },
  ];
  const itemseparator = () => (
    <View
      style={{
        width: 10,
      }}
    />
  );
  const CardItem = ({ item }) => {
    const Content = (
      <View style={[styles.cardContent]}>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <Text style={[styles.text, { color: item.textColor }]}>
          {item.text}
        </Text>
        <Text style={[styles.amount, { color: item.textColor }]}>
          {item.amount}
        </Text>
      </View>
    );

    return item.type === 'image' ? (
      <ImageBackground
        source={{ uri: item.backgroundImage }}
        style={styles.card}
        imageStyle={{ borderRadius: 10 }}
      >
        {Content}
      </ImageBackground>
    ) : (
      <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
        {Content}
      </View>
    );
  };
const CardItem2 = ({ item }) => {
  return (
    <View style={styles.cardItem2}>
  <View
    style={[
      styles.alphabetCircle,
      { backgroundColor: item.backgroundColor },
    ]}
  >
    <Text style={styles.alphabetText}>
      {item.title?.charAt(0).toUpperCase()}
    </Text>
  </View>

  <View style={styles.textSection}>
    <Text style={styles.nameText}>{item.title}</Text>
    <Text style={styles.DescText}>{item.text}</Text>
  </View>

  <Text style={styles.amountText}>{item.amount}</Text>
</View>

  );
};

  return (
    <ScrollView
    bounces={false}
    showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://img.freepik.com/free-vector/floral-ornamental-abstract-background_52683-30016.jpg',
        }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.topbar}>
          <Ionicons name={'cog-outline'} size={30} color={'#fff'} />
        </View>

        <Image
          source={{
            uri: 'https://t3.ftcdn.net/jpg/07/24/59/76/360_F_724597608_pmo5BsVumFcFyHJKlASG2Y2KpkkfiYUU.jpg',
          }}
          style={styles.profileImage}
          resizeMode="cover"
        />

        <View style={styles.textContainer}>
          <Text style={styles.MainText}>Okay you spent</Text>
          <Text style={styles.amount}>34,678</Text>
          <Text style={styles.DescText}>updates yesterday</Text>
        </View>
      </ImageBackground>

      <View style={styles.Content}>
        <View style={styles.titleText}>
          <View>
            <Text style={[styles.MainText, { color: 'black' }]}>
              Doctors
              <Text style={styles.subText}>{'  '}before Payday</Text>
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.DescText}>$232,33</Text>
            <Ionicons name={'chevron-forward'} size={18} color={'black'} />
          </View>
        </View>
                <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <CardItem item={item} />}
          contentContainerStyle={styles.list}
          horizontal={true}
          ItemSeparatorComponent={itemseparator}
        />
      </View>

      <View style={styles.upcomingContainer}>
        <Text style={[styles.subText,{paddingLeft:10}]}>Today</Text>
        <Ionicons name={'chevron-forward'} size={22} color={'gray'} />
          </View>
        <View style={{backgroundColor:'#fff'}}>
          <FlatList
          data={data2}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <CardItem2 item={item} />}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={itemseparator}
        />
      </View>
    </View>
    
    </ScrollView>
    
  );
}
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
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
    position: 'absolute',
    top: 50,
    right: 40,
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
    marginBottom:20
  },
  upcomingContainer:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    padding:20,
    backgroundColor:'#fff'
  },
 cardItem2: {
  flexDirection: 'row',
  alignItems: 'center',
  borderBottomColor: '#f2f2f2',
  borderBottomWidth:2,
  padding: 10,
  borderRadius: 10,
  marginBottom: 10,
  marginHorizontal:10,
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
