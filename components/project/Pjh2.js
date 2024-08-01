import React, { useEffect, useRef } from 'react';
import { Animated, Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
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
        navigation.navigate('NextScreen'); // Change 'NextScreen' to the actual screen name you want to navigate to
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, { opacity: fadeAnim, backgroundColor: "#7cb48f", flex: 1 }]}>
                <Text style={styles.text}>โชคชะตา Lv.3</Text>
            </Animated.View>
            <Animated.View style={[styles.box, { opacity: fadeAnim, backgroundColor: "#7CA1B4", flex: 3 }]}>
                <Image
                    source={require('../../assets/project/sena.png')}
                    style={styles.image}
                    resizeMode="cover"
                />
            </Animated.View>
            <Animated.View style={[styles.box, { opacity: fadeAnim, backgroundColor: "#6E6DD2", flex: 5, justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={styles.h1Text}>Tower Of Ascention</Text>
                <Text style={styles.paragraphText1}>Now all my tales are based on the fundamental premise that common human laws and interests and emotions have no validity or significance in the vast cosmos-at-large. To me there is nothing but puerility in a tale in which the human form—and the local human passions and conditions and standards—are depicted as native to other worlds or other universes. To achieve the essence of real externality, whether of time or space or dimension, one must forget that such things as organic life, good and evil, love and hate, and all such local attributes of a negligible and temporary race called mankind, have any existence at all. Only the human scenes and characters must have human qualities. These must be handled with unsparing realism, (not catch-penny romanticism) but when we cross the line to the boundless and hideous unknown—the shadow-haunted Outside—we must remember to leave our humanity—and terrestrialism at the threshold.</Text>
            </Animated.View>
            <Animated.View style={[styles.box, { opacity: fadeAnim, backgroundColor: "#7CA1B4", flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={styles.paragraphText}>ข้อความย่อ</Text>
            </Animated.View>
            <Animated.View style={[styles.box, { opacity: fadeAnim, backgroundColor: "#6E6DD2", flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={styles.text}>ข้อความ</Text>
            </Animated.View>

            <TouchableOpacity
                style={styles.button}
                onPress={handlePress}
            >
                <Text style={styles.buttonText}>เลือกสถานะการ</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    h1Text: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
    },
    paragraphText: {
        color: 'white',
        fontSize: 16,
    },
    paragraphText1: {
        color: 'white',
        fontSize: 16,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    button: {
        position: 'absolute',
        bottom: 30,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#000',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
});
