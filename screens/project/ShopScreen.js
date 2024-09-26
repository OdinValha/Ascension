import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ITEMS_KEY = 'items'; // Key for storing items in AsyncStorage

export default function ShopScreen({ character }) {
  const [storedCharacter, setStoredCharacter] = useState(character);
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');

  useEffect(() => {
    // Function to retrieve character data from AsyncStorage
    const fetchCharacterData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('character');
        if (storedData) {
          setStoredCharacter(JSON.parse(storedData));
        }
      } catch (error) {
        console.error('Failed to load character data from AsyncStorage:', error);
      }
    };

    // Function to retrieve items from AsyncStorage
    const fetchItems = async () => {
      try {
        const storedItems = await AsyncStorage.getItem(ITEMS_KEY);
        if (storedItems) {
          setItems(JSON.parse(storedItems));
        } else {
          setItems([]); // Initialize with empty array if no items are found
        }
      } catch (error) {
        console.error('Failed to load items from AsyncStorage:', error);
      }
    };

    fetchCharacterData();
    fetchItems();
  }, []);

  // Function to save character data to AsyncStorage
  const saveCharacterData = async () => {
    try {
      await AsyncStorage.setItem('character', JSON.stringify(storedCharacter));
    } catch (error) {
      console.error('Failed to save character data to AsyncStorage:', error);
    }
  };

  // Function to save items to AsyncStorage
  const saveItems = async (updatedItems) => {
    try {
      await AsyncStorage.setItem(ITEMS_KEY, JSON.stringify(updatedItems));
    } catch (error) {
      console.error('Failed to save items to AsyncStorage:', error);
    }
  };

  // Function to add new item
  const addItem = () => {
    if (newItemName && newItemQuantity) {
      const updatedItems = [...items, { id: (items.length + 1).toString(), name: newItemName, quantity: parseInt(newItemQuantity) }];
      setItems(updatedItems);
      saveItems(updatedItems);
      setNewItemName('');
      setNewItemQuantity('');
    }
  };

  // Function to update item quantity
  const updateItemQuantity = (id, quantity) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setItems(updatedItems);
    saveItems(updatedItems);
  };

  // Function to remove an item
  const removeItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    saveItems(updatedItems);
  };

  // Function to mark item as purchased
  const markItemAsPurchased = (id) => {
    console.log(`Item with id ${id} has been purchased.`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={storedCharacter.image} style={styles.characterImage} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.characterName}>{storedCharacter.name}</Text>
          <Text style={styles.health}>❤️ 170/170</Text>
          <Text style={styles.diamonds}>💎 200</Text>
        </View>
      </View>

      <Text style={styles.characterDescription}>{storedCharacter.description}</Text>
      <Text style={styles.shopTitle}>Welcome to the Shop!</Text>

      {/* Item Management Section */}
      <View style={styles.itemContainer}>
        <TextInput
          placeholder="Item Name"
          value={newItemName}
          onChangeText={setNewItemName}
          style={styles.input}
          placeholderTextColor="#999"
        />
        <TextInput
          placeholder="Quantity"
          keyboardType="numeric"
          value={newItemQuantity}
          onChangeText={setNewItemQuantity}
          style={styles.input}
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.addButton} onPress={addItem}>
          <Text style={styles.addButtonText}>Add Item</Text>
        </TouchableOpacity>

        <FlatList
          data={items}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.name}: {item.quantity}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => updateItemQuantity(item.id, item.quantity + 1)}>
                  <Text style={styles.buttonText}>Increase</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => updateItemQuantity(item.id, Math.max(item.quantity - 1, 0))}>
                  <Text style={styles.buttonText}>Decrease</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRemove} onPress={() => removeItem(item.id)}>
                  <Text style={styles.buttonText}>Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCheck} onPress={() => markItemAsPurchased(item.id)}>
                  <Text style={styles.buttonText}>Check</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  characterImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  headerTextContainer: {
    marginLeft: 15,
  },
  characterName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  health: {
    color: '#ff4d4d',
    fontSize: 14,
  },
  diamonds: {
    color: '#00bfff',
    fontSize: 14,
  },
  characterDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  shopTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#00bfff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#00bfff',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
  },
  buttonRemove: {
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
  },
  buttonCheck: {
    backgroundColor: '#32cd32',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
