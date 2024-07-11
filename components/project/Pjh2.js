
import React, { useEffect, useRef } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Pjh1() {
    const navigation = useNavigation();
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const moveAnim = useRef(new Animated.Value(0)).current;

    const handlePress = () => {
        navigation.navigate('NextScreen');
    };

    return (
        <View style={{
            flexDirection: 'column'
        }}>
            <View style={{ flex: 1, backgroundColor: 'red' }} />
            <View style={{ flex: 2, backgroundColor: 'darkorange' }} />
            <View style={{ flex: 3, backgroundColor: 'green' }} />
        </View>
    );
}




