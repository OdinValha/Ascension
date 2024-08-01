import React, { useEffect, useRef } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Pjh1() {
    const navigation = useNavigation();
    const fadeAnim = useRef(new Animated.Value(1)).current;

    const handlePress = () => {
        navigation.navigate('Pjh2');
    };

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 1500,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 1500,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [fadeAnim]);

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Animated.Image
                source={require('../../assets/project/homeloade.png')}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                }}
                resizeMode="cover"
            />
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    bottom: 30,
                    padding: 10,
                    borderRadius: 5,
                }}
                onPress={handlePress}
            >
                <Animated.Text style={{
                    color: 'white',
                    fontSize: 50,
                    fontWeight: 'bold',
                    opacity: fadeAnim
                }}>
                    กดเพื่อเริ่ม
                </Animated.Text>
            </TouchableOpacity>
        </View>
    );
}
