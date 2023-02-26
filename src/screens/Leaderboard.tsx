import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';
import Share from 'react-native-share';

const dummyData = [
  {
    "uid": 1,
    "username": "Michel Stark",
    "score": 800
  },
  {
    "uid": 2,
    "username": "Michel Smith",
    "score": 650
  },
  {
    "uid": 3,
    "username": "Sanath Jayasooriya",
    "score": 500
  },
  {
    "uid": 4,
    "username": "Ricky Pontin",
    "score": 400
  },
  {
    "uid": 5,
    "username": "Sachin Thendulkar",
    "score": 350
  }
]

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState(dummyData);

  useEffect(() => {
    // when fetching, show activity indicator
    //fetchLeaderboard(); 
    setLeaderboard(dummyData);
  }, []);

  // fetch leaderboard data from api
  /*
  const fetchLeaderboard = async () => {
    const data = await fetchLeaderboardFromApi();
    setLeaderboard(data);
  };
  */

  const renderLeaderboardItem = ({ item, index } : {item:any, index:Int32}) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
      <Text style={styles.text}>{index + 1}. {item.username}</Text>
      <Text style={{...styles.text, textAlign: 'right' }}>{item.score}</Text>
    </View>
  );

  const handleShare = async () => {
    try {
      const shareOptions = {
        message: 'Check out my score on the Wordify!',
        url: 'https://wordify.com/leaderboard',
        title: 'Wordify Leaderboard',
      };
      const result = await Share.open(shareOptions);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ backgroundColor: "#" }}>
        <FlatList
          data={leaderboard}
          renderItem={renderLeaderboardItem}
        />
      </View>
      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <Text style={styles.shareButtonText}>Share My Score</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#4f6de2"
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: "#ffffff"
  },
  shareButton: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 8,
    marginTop: 16,
  },
  shareButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
})

export default Leaderboard;