import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, Button, StatusBar, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';
import LetterBox from '../components/LetterBox';
import LetterPicker from '../components/LetterPicker';

// This data set can be fetched from a backend and store using Redux later
const wordsByCategory = {
  "Animals": [
    {
      "name": "Tiger",
      "description": "A big cat with orange fur and black stripes, that preys on other animals and is native to Asia.",
      "difficulty": 5
    },
    {
      "name": "Elephant",
      "description": "The largest land mammal, known for its trunk, tusks and large ears, found in Africa and Asia.",
      "difficulty": 3
    },
    {
      "name": "Lion",
      "description": "A big cat with a distinctive mane, known for its powerful roar and hunting skills, found in Africa and some parts of Asia.",
      "difficulty": 6
    },
    {
      "name": "Giraffe",
      "description": "A tall African mammal with a long neck and spotted coat, used for browsing leaves from trees.",
      "difficulty": 8
    }
  ],
  "Cities": [
    {
      "name": "Colombo",
      "description": "The commercial capital and largest city in Sri Lanka, known for its historical and cultural landmarks.",
      "difficulty": 4
    },
    {
      "name": "London",
      "description": "The capital and largest city of England and the United Kingdom, known for its history, culture, and landmarks.",
      "difficulty": 6
    },
    {
      "name": "Paris",
      "description": "The capital and largest city of France, known for its art, fashion, and architecture.",
      "difficulty": 7
    },
    {
      "name": "Tokyo",
      "description": "The capital and largest city of Japan, known for its modernity, technology, and cultural landmarks.",
      "difficulty": 9
    }
  ],
  "Food": [
    {
      "name": "Pizza",
      "description": "A savory Italian dish consisting of a dough base topped with tomato sauce, cheese, and various toppings.",
      "difficulty": 2
    },
    {
      "name": "Burger",
      "description": "A sandwich consisting of a grilled or fried patty of ground beef or other meat, usually served with various toppings and condiments.",
      "difficulty": 3
    },
    {
      "name": "Sushi",
      "description": "A Japanese dish consisting of bite-sized pieces of raw fish or other seafood served on small portions of rice.",
      "difficulty": 8
    },
    {
      "name": "Pasta",
      "description": "A staple Italian dish made of dough and typically served with a sauce, such as tomato or cheese sauce.",
      "difficulty": 4
    }
  ],
}

export const shuffleWord = (word: string) => {
  const shuffledWord = word.split('').sort(() => 0.5 - Math.random()).join('');
  return shuffledWord;
};

export const calculatePoints = (word: string, difficulty: Int32) => {
  var score = word.length * 9 + difficulty
  return score;
};

const WordifyScreen = ({ route } : {route: any}) => {
  const navigation = useNavigation();
  const { category } = route.params;

  const [words, setWords] = useState(wordsByCategory[category]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(shuffleWord(words[0]["name"].toUpperCase()));
  const [selectedWord, setSelectedWord] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    setSelectedWord('');
    setCurrentWord(shuffleWord(words[currentWordIndex]["name"].toUpperCase()));
  }, [words, currentWordIndex]);

  const onWordSelect = (letter: string) => {
    const updatedSelectedWord = selectedWord + letter;
    setSelectedWord(updatedSelectedWord);

    if (updatedSelectedWord === words[currentWordIndex]["name"].toUpperCase()) {
      var nscore = calculatePoints(words[currentWordIndex]["name"], words[currentWordIndex]["difficulty"])
      setScore(score + nscore);
      onNext();
      if (currentWordIndex + 1 != words.length) {
        Alert.alert("Yey, Congratulations. You earned " + nscore + " marks. Let's proceed!")
      }
    } else if (updatedSelectedWord.length == words[currentWordIndex]["name"].length) {
      if (currentWordIndex + 1 != words.length) {
        Alert.alert("Opps, Let's try the next one. Good luck!")
      }
      onNext();
    }
  };

  const onNext = () => {
    if (currentWordIndex + 1 == words.length) {
      navigation.goBack();
      navigation.navigate("Leaderboard" as never);
    } else {
      setCurrentWordIndex((wordIndex) => wordIndex + 1);
      setSelectedWord('');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'light-content'}></StatusBar>
      <View style={styles.header} >
        <View>
          <TouchableOpacity style={styles.navHeader} onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assests/images/backButton.png')}
              style={styles.backButtonImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.progress}>
          <Text style={styles.progressText}>{currentWordIndex + 1}/{words.length}</Text>
        </View>
        <View style={{ padding: 28 }}>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>Score: {score}</Text>
          </View>
          <View style={styles.inputContainer}>
            {Array.from(Array(words[currentWordIndex]["name"].length)).map((_, i) => (
              <LetterBox key={i} >{selectedWord[i] ? selectedWord[i] : ''}</LetterBox>
            ))}
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.wordContainer}>
            {currentWord.split('').map((letter: string, index: Int32) => (
              <LetterPicker key={index} onSelect={() => onWordSelect(letter)}>{letter}</LetterPicker>
            ))}
          </View>
        <View style={styles.hintContainer}><Text style={styles.hint}>{words[currentWordIndex]["description"]}</Text></View>
        </View>
        <Button title={currentWordIndex + 1 == words.length ? "Done" : "Skip"} onPress={() => { onNext() }} color='#ffffff' />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#4f6de2"
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  progress: {
    justifyContent: 'center',
  },
  progressText: {
    fontSize: 18,
    color: "#ffffff"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#4f6de2"
  },
  navHeader: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  backButtonImage: {
    margin: 8,
    width: 40,
    height: 40,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#4f6de2',
  },
  wordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    flexWrap: 'wrap',
  },
  hintContainer: {
    marginHorizontal: 10,
    alignItem: 'center',
    justifyContent: 'center'
  },
  hint: {
    color: "#ffffff"
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    flexWrap: 'wrap',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#ffffff"
  },
});

export default WordifyScreen;