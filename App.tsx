// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

// const categories = [
//   { id: 1, name: 'Animals' },
//   { id: 2, name: 'Cities' },
//   { id: 3, name: 'Food' },
// ];

// const wordsByCategory = {
//   Animals: ['Tiger', 'Elephant', 'Lion', 'Giraffe'],
//   Cities: ['New York', 'London', 'Paris', 'Tokyo'],
//   Food: ['Pizza', 'Burger', 'Sushi', 'Pasta'],
// };

// const shuffleWord = (word: string) => {
//   const shuffledWord = word.split('').sort(() => 0.5 - Math.random()).join('');
//   return shuffledWord;
// };

// const App = () => {
//   const [category, setCategory] = useState(categories[0].name);
//   const [words, setWords] = useState(wordsByCategory[categories[0].name]);
//   const [score, setScore] = useState(0);
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [currentWord, setCurrentWord] = useState(shuffleWord(words[0].toUpperCase()));
//   const [selectedWord, setSelectedWord] = useState('');

//   useEffect(() => {
//     setCurrentWord(shuffleWord(words[currentWordIndex].toUpperCase()));
//   }, [words, currentWordIndex]);

//   const onCategoryChange = (categoryName: string) => {
//     setCategory(categoryName);
//     setWords(wordsByCategory[categoryName]);
//     setCurrentWordIndex(0);
//     setScore(0);
//     setSelectedWord('');
//   };

//   const onWordSelect = (letter: string) => {
//     const updatedSelectedWord = selectedWord + letter;
//     setSelectedWord(updatedSelectedWord);
//     if (updatedSelectedWord === words[currentWordIndex].toUpperCase()) {
//       setCurrentWordIndex(currentWordIndex + 1);
//       setSelectedWord('');
//       setScore(score + words[currentWordIndex].length * 10);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.topContainer}>
//         <View style={styles.scoreContainer}>
//           <Text style={styles.scoreText}>Score: {score}</Text>
//         </View>
//         <View style={styles.inputContainer}>
//           {Array.from(Array(words[currentWordIndex].length)).map((_, i) => (
//             <TextInput
//               key={i}
//               style={styles.inputBox}
//               maxLength={1}
//               value={selectedWord[i] ? selectedWord[i] : ''}
//             />
//           ))}
//         </View>
//       </View>
//       <View style={styles.bottomContainer}>
//         <View style={styles.categoryContainer}>
//           {categories.map((category) => (
//             <TouchableOpacity
//               key={category.id}
//               style={[
//                 styles.categoryButton,
//                 category.name === category.name && styles.selectedCategoryButton,
//               ]}
//               onPress={() => onCategoryChange(category.name)}
//             >
//               <Text
//                 style={[
//                   styles.categoryButtonText,
//                   category.name === category.name && styles.selectedCategoryButtonText,
//                 ]}
//               >
//                 {category.name}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//         <View style={styles.wordContainer}>
//           {currentWord.split('').map((letter: string, index: React.Key) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.wordButton}
//               onPress={() => onWordSelect(letter)}
//             >
//               <Text style={styles.wordButtonText}>{letter}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   topContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   bottomContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 10,
//     backgroundColor: '#f5f5f5',
//   },
//   wordContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   wordButton: {
//     padding: 10,
//     backgroundColor: '#4285f4',
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   wordButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   letterTile: {
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     margin: 5,
//     borderRadius: 5,
//   },
//   letterText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     width: '80%',
//     marginBottom: 20,
//   },
//   inputBox: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//     marginHorizontal: 10,
//     textAlign: 'center',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   submitButton: {
//     padding: 10,
//     backgroundColor: '#4285f4',
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   leaderboardContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   leaderboardTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   leaderboardItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//   },
//   leaderboardRank: {
//     fontSize: 20,
//     marginRight: 10,
//   },
//   leaderboardName: {
//     fontSize: 20,
//     flex: 1,
//   },
//   leaderboardScore: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },

//   // container: {
//   //   flex: 1,
//   //   backgroundColor: '#fff',
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   //   padding: 20,
//   // },
//   // header: {
//   //   fontSize: 24,
//   //   fontWeight: 'bold',
//   //   marginBottom: 20,
//   // },
//   categoryContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   categoryButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#f2f2f2',
//   },
//   categoryButtonActive: {
//     borderColor: '#007aff',
//     backgroundColor: '#007aff',
//   },
//   categoryButtonText: {
//     color: '#333',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   categoryButtonTextActive: {
//     color: '#fff',
//   },
//   selectedCategoryButton: {
//     backgroundColor: '#4dabf5',
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     marginHorizontal: 10,
//   },
//   selectedCategoryButtonText: {
//     color: '#ffffff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   // tilesContainer: {
//   //   flexDirection: 'row',
//   //   flexWrap: 'wrap',
//   //   justifyContent: 'center',
//   //   marginBottom: 20,
//   // },
//   // tile: {
//   //   paddingVertical: 10,
//   //   paddingHorizontal: 20,
//   //   borderRadius: 10,
//   //   borderWidth: 1,
//   //   borderColor: '#ccc',
//   //   backgroundColor: '#f2f2f2',
//   //   marginHorizontal: 5,
//   //   marginVertical: 10,
//   // },
//   // tileSelected: {
//   //   borderColor: '#007aff',
//   //   backgroundColor: '#007aff',
//   // },
//   // tileText: {
//   //   color: '#333',
//   //   fontSize: 16,
//   //   fontWeight: 'bold',
//   //   textAlign: 'center',
//   // },
//   // tileTextSelected: {
//   //   color: '#fff',
//   // },
//   // inputContainer: {
//   //   flexDirection: 'row',
//   //   justifyContent: 'center',
//   //   marginBottom: 20,
//   // },
//   // inputBox: {
//   //   borderWidth: 1,
//   //   borderColor: '#ccc',
//   //   borderRadius: 10,
//   //   paddingHorizontal: 20,
//   //   paddingVertical: 10,
//   //   marginHorizontal: 5,
//   //   textAlign: 'center',
//   //   minWidth: 50,
//   // },
//   // inputBoxError: {
//   //   borderColor: 'red',
//   // },
//   scoreContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   // scoreLabel: {
//   //   fontSize: 20,
//   //   fontWeight: 'bold',
//   // },
//   scoreText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   // button: {
//   //   paddingVertical: 10,
//   //   paddingHorizontal: 20,
//   //   borderRadius: 10,
//   //   borderWidth: 1,
//   //   borderColor: '#007aff',
//   //   backgroundColor: '#007aff',
//   // },
//   // buttonText: {
//   //   color: '#fff',
//   //   fontSize: 16,
//   //   fontWeight: 'bold',
//   //   textAlign: 'center',
//   // },




//   // container: {
//   //   flex: 1,
//   //   backgroundColor: '#fff',
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   //   padding: 20,
//   // },
//   // header: {
//   //   fontSize: 36,
//   //   fontWeight: 'bold',
//   //   marginBottom: 20,
//   // },
//   // categorySelect: {
//   //   marginBottom: 20,
//   // },
//   // categorySelectText: {
//   //   fontSize: 24,
//   //   fontWeight: 'bold',
//   //   marginBottom: 10,
//   // },
//   // gameBoard: {
//   //   flexDirection: 'row',
//   //   flexWrap: 'wrap',
//   //   marginBottom: 20,
//   // },
//   // gameTile: {
//   //   borderWidth: 1,
//   //   borderColor: '#000',
//   //   width: 40,
//   //   height: 40,
//   //   margin: 5,
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   //   backgroundColor: '#fff',
//   // },
//   // gameTileText: {
//   //   fontSize: 24,
//   // },
//   // inputContainer: {
//   //   flexDirection: 'row',
//   //   marginBottom: 20,
//   // },
//   // inputBox: {
//   //   borderWidth: 1,
//   //   borderColor: '#000',
//   //   width: 40,
//   //   height: 40,
//   //   margin: 5,
//   //   textAlign: 'center',
//   //   fontSize: 24,
//   // },
//   // scoreContainer: {
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-between',
//   //   marginBottom: 20,
//   // },
//   // scoreText: {
//   //   fontSize: 24,
//   //   fontWeight: 'bold',
//   // },
//   // buttonContainer: {
//   //   marginBottom: 20,
//   // },
//   // button: {
//   //   backgroundColor: '#007AFF',
//   //   padding: 10,
//   //   borderRadius: 5,
//   // },
//   // buttonText: {
//   //   color: '#fff',
//   //   fontSize: 24,
//   //   fontWeight: 'bold',
//   //   textAlign: 'center',
//   // },
// });



import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
