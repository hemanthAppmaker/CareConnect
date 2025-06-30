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
import styles from './HomeStyle';

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

