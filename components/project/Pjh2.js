import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Pjh2() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handlePress = () => {
    navigation.navigate('Pjh3'); 
  };

  const scenarios = [
    {
      id: '1',
      title: 'Tower of Ascension',
      description: `A decades-long winter plagued humanity. Using magic and steam power to combat the cold, the situation becomes increasingly dire. The source of the winter is believed to be a tower located in the north.

      However, previous expeditions have been unsuccessful, and the only returnee has gone mad from what he encountered: unknown monsters and demons. Despite the repeated failures, preparations are being made for one final expedition as there are no other options left.`,
      difficulty: 'Hard',
      background: require('../../assets/project/sena.png'), 
    },
  ];

  const ScenarioSelectionScreen = () => {
    const [selectedScenario] = React.useState(scenarios[0]);

    return (
      <ImageBackground
        source={selectedScenario.background}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Animated.View style={[styles.infoContainer, { opacity: fadeAnim }]}>
            <Text style={styles.levelText}>Destiny Lv. 1</Text>
            <Text style={styles.title}>{selectedScenario.title}</Text>
            <Text style={styles.description}>{selectedScenario.description}</Text>
            <Text style={styles.difficulty}>
              Difficulty: {selectedScenario.difficulty}
            </Text>
            <Text style={styles.difficultyHint}>
              Intended difficulty for this scenario.
            </Text>
            <TouchableOpacity style={styles.selectButton} onPress={handlePress}>
              <Text style={styles.selectButtonText}>Select Scenario</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ImageBackground>
    );
  };

  return <ScenarioSelectionScreen />;
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Slightly darker overlay
    padding: 20,
  },
  levelText: {
    color: '#ff5733', // Change to a brighter red for better contrast
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  infoContainer: {
    width: '100%',
    maxWidth: 600,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker background for readability
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    color: '#ddd',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },
  difficulty: {
    color: '#ffcc00',
    fontSize: 18,
    marginVertical: 5,
    fontWeight: '600',
  },
  difficultyHint: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 20,
  },
  selectButton: {
    backgroundColor: '#ff9800',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  selectButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
