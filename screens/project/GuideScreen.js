import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function GuideScreen({ character }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={character.image} style={styles.characterImage} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.characterName}>{character.name}</Text>
          <Text style={styles.health}>❤️ 170/170</Text>
          <Text style={styles.diamonds}>💎 200</Text>
        </View>
      </View>

      <Text style={styles.characterDescription}>{character.description}</Text>
      <Text style={styles.text}>Welcome to the Guide!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  characterImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerTextContainer: {
    marginLeft: 10,
  },
  characterName: {
    color: '#000',
    fontSize: 18,
  },
  health: {
    color: 'red',
    fontSize: 14,
  },
  diamonds: {
    color: '#00f',
    fontSize: 14,
  },
  characterDescription: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
    margin: 20,
  },
  text: {
    fontSize: 24,
  },
});
