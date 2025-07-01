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
import { bottom, top } from '../../../DummyData';
export default function MyComponent() {
  const data = top;
  const data2 = bottom
 
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

