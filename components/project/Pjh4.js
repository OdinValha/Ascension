import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; // หรือ import จาก react-native-vector-icons
import ShopScreen from '../../screens/project/ShopScreen';
import RecordScreen from '../../screens/project/RecordScreen';
import AchievementsScreen from '../../screens/project/AchievementsScreen';
import InfoScreen from '../../screens/project/InfoScreen';
import GuideScreen from '../../screens/project/GuideScreen';
import { useRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function GameTabs({ character }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Shop') {
            iconName = 'shopping-cart';
          } else if (route.name === 'Record') {
            iconName = 'history';
          } else if (route.name === 'Achievements') {
            iconName = 'star';
          } else if (route.name === 'Info') {
            iconName = 'info';
          } else if (route.name === 'Guide') {
            iconName = 'book';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ffcc00',
        tabBarInactiveTintColor: '#ccc',
        tabBarStyle: {
          backgroundColor: '#222',
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          color: '#fff',
          fontSize: 14,
        },
      })}
    >
      <Tab.Screen name="Shop">
        {(props) => <ShopScreen {...props} character={character} />}
      </Tab.Screen>
      <Tab.Screen name="Record">
        {(props) => <RecordScreen {...props} character={character} />}
      </Tab.Screen>
      <Tab.Screen name="Achievements">
        {(props) => <AchievementsScreen {...props} character={character} />}
      </Tab.Screen>
      <Tab.Screen name="Info">
        {(props) => <InfoScreen {...props} character={character} />}
      </Tab.Screen>
      <Tab.Screen name="Guide">
        {(props) => <GuideScreen {...props} character={character} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function GameScreen() {
  const route = useRoute();
  const { character } = route.params;

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

      <GameTabs character={character} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1e1e1e',
    borderBottomWidth: 2,
    borderBottomColor: '#ffcc00',
  },
  characterImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ffcc00',
  },
  headerTextContainer: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  characterName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  health: {
    color: '#f44336',
    fontSize: 16,
    marginVertical: 2,
  },
  diamonds: {
    color: '#03a9f4',
    fontSize: 16,
    marginVertical: 2,
  },
  characterDescription: {
    color: '#e0e0e0',
    fontSize: 16,
    textAlign: 'center',
    margin: 20,
  },
});
