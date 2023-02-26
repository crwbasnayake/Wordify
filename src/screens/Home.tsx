import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import CategoryButton from '../components/CategoryButton';

// This data set can be fetched from a backend and store using Redux later
const categories = [
  { id: 1, name: 'Animals' },
  { id: 2, name: 'Cities' },
  { id: 3, name: 'Food' },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'light-content'}></StatusBar>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>WORDIFY</Text>
          <Image
            source={require('../../assests/images/logo-transparent.png')}
            style={styles.logo}
          />
        </View>
        <View>
          <Text style={styles.gameInstruction}>Select the Category</Text>
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              onSelect={() => {
                navigation.navigate('Wordify' as never, {
                  category: category.name,
                } as never);
              }}
            >{category.name}</CategoryButton>
          ))}
        </View>
        <TouchableOpacity style={styles.leaderBoardButton} onPress={() => navigation.navigate("Leaderboard" as never, {} as never)}>
          <Image
            source={require('../../assests/images/leaderboard.png')}
            style={styles.leaderBoardImage}
          />
          <Text
            style={[
              styles.leaderBoardText,
            ]}
          >
            Leaderboard
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#4f6de2"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#4f6de2",
  },
  logoContainer: {
    margin: 20,
    alignItems: 'center',
    backgroundColor: "#4f6de2"
  },
  title: {
    fontWeight: "700",
    fontSize: 30,
    color: "#ffffff"
  },
  logo: {
    width: 200,
    height: 200,
  },
  gameInstruction: {
    fontWeight: "500",
    fontSize: 16,
    color: "#ffffff"
  },
  leaderBoardButton: {
    margin: 60,
    alignItems: 'flex-end'
  },
  leaderBoardImage: {
    width: 100,
    height: 100,
  },
  leaderBoardText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500"
  },
});

export default HomeScreen;
