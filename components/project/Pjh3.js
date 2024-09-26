import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // ใช้ useNavigation เพื่อการนำทาง

const characters = [
  {
    id: '1',
    name: 'Klein Moretti',
    image: require('../../assets/project/Klein_Moretti_Official.webp'),
    description: 'You can address me as…The Fool.',
    trait: 'Starting Trait: Ironclad Lv. 3',
  },
  {
    id: '2',
    name: 'Alger Wilson',
    image: require('../../assets/project/Alger_Wilson_Official.webp'),
    description: 'It is dangerous. It is also an opportunity...',
    trait: 'Starting Trait: Something Lv. 2',
  },
  {
    id: '3',
    name: 'Audrey Hall',
    image: require('../../assets/project/Audrey_Hall_Official.webp'),
    description: 'Good afternoon, Mr. Fool~!',
    trait: 'Starting Trait: Something Lv. 1',
  },
  {
    id: '4',
    name: 'Derrick Berg',
    image: require('../../assets/project/Derrick_Berg_Official.webp'),
    description: 'My faith lies only with Mr. Fool!',
    trait: 'Starting Trait: Ironclad Lv. 3',
  },
  {
    id: '5',
    name: 'Fors Wal',
    image: require('../../assets/project/Fors_Wall_Official.webp'),
    description: 'Life is short. There are too many things that we need to do, why must we waste our time on such uninteresting, menial tasks?',
    trait: 'Starting Trait: Something Lv. 2',
  },
  {
    id: '6',
    name: 'Emlyn White',
    image: require('../../assets/project/Emlyn_White_Official.webp'),
    description: 'This is the destiny of the messiah…',
    trait: 'Starting Trait: Something Lv. 1',
  },
  {
    id: '7',
    name: 'Cattleya',
    image: require('../../assets/project/Cattleya_Official.webp'),
    description: 'Is this my destiny, Your Majesty?',
    trait: 'Starting Trait: Something Lv. 1',
  },
  {
    id: '8',
    name: 'Leonard Mitchell',
    image: require('../../assets/project/Leonard_Mitchell_Official.webp'),
    description: 'I’m glad that we have this understanding. In action novels, this is called the meeting of two protagonists. The wheels of history are set in motion.',
    trait: 'Starting Trait: Something Lv. 1',
  },
  {
    id: '9',
    name: 'Xio Derecha',
    image: require('../../assets/project/Xio_Derecha_Official.webp'),
    description: 'In order to… Anyway, I left my mother and my younger brother and came to Backlund, looking for a chance to improve myself, hoping to restore my family’s glory and my father’s reputation.',
    trait: 'Starting Trait: Something Lv. 1',
  },
];

const CharacterSelectionScreen = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
  const navigation = useNavigation(); // ใช้ navigation เพื่อนำทาง

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedCharacter(item)}>
      <Image
        source={item.image}
        style={[
          styles.characterImage,
          { borderColor: selectedCharacter.id === item.id ? '#ffcc00' : '#444' },
        ]}
      />
    </TouchableOpacity>
  );

  const handleStartAdventure = () => {
    navigation.navigate('Pjh4', { character: selectedCharacter });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.levelText}>Destiny Lv. 1</Text>
      <Image source={selectedCharacter.image} style={styles.mainImage} />
      <Text style={styles.characterName}>{selectedCharacter.name}</Text>
      <Text style={styles.characterDescription}>{selectedCharacter.description}</Text>
      <Text style={styles.characterTrait}>{selectedCharacter.trait}</Text>

      <TouchableOpacity style={styles.startButton} onPress={handleStartAdventure}>
        <Text style={styles.startButtonText}>Start Adventure</Text>
      </TouchableOpacity>

      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    paddingTop: 100,
  },
  levelText: {
    color: '#ff4444',
    fontSize: 20,
    position: 'absolute',
    top: 20,
    left: 20,
    fontWeight: 'bold',
  },
  mainImage: {
    width: 220,
    height: 400,
    borderRadius: 10,
    resizeMode: 'cover',
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#ffcc00',
  },
  characterName: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  characterDescription: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  characterTrait: {
    color: '#ffcc00',
    fontSize: 18,
    marginVertical: 10,
    fontStyle: 'italic',
  },
  startButton: {
    backgroundColor: '#ff9900',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 20,
    shadowColor: '#fff',
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  startButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  flatList: {
    paddingVertical: 10,
  },
  characterImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    marginHorizontal: 10,
  },
});

export default CharacterSelectionScreen;
