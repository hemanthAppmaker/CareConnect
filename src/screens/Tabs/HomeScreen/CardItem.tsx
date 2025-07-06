import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';

const DEFAULT_IMAGE = 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png'; // fallback image

const CardItem = ({ item, onPress }: any) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        accessibilityLabel={`Card for ${item.text}`}
        accessibilityHint={`Tap to open details for ${item.title || item.text}`}
        accessibilityRole="button"
        style={[styles.card, { backgroundColor: item.backgroundColor }]}
      >
        <Image
          source={{ uri: item.image || DEFAULT_IMAGE }}
          style={styles.image}
          resizeMode="cover"
          onError={e => {
            e.target.src = DEFAULT_IMAGE;
          }}
        />
        <View style={styles.content}>
          <Text
            style={[styles.title, { color: item.textColor }]}
            numberOfLines={1}
          >
            {item.text}
          </Text>
          {!!item.amount && (
            <Text
              style={[styles.amount, { color: item.textColor }]}
              numberOfLines={1}
            >
              {item.amount}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 14,
    marginVertical: 8,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 14,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  amount: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default CardItem;
