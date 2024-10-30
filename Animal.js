import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const animals = [
    "bee", "crocodile", "deer", "elephant", "giraffe",
    "hummingbird", "kingfisher", "leopard", "owl", "peacock",
    "penguin", "rabbit", "squirrel", "tiger", "turtle", "zebra"
];

const animalImages = {
    bee: require('./img/bee.jpg'),
    crocodile: require('./img/crocodile.jpg'),
    deer: require('./img/deer.jpg'),
    elephant: require('./img/elephant.jpg'),
    giraffe: require('./img/giraffe.jpg'),
    hummingbird: require('./img/hummingbird.jpg'),
    kingfisher: require('./img/kingfisher.jpg'),
    leopard: require('./img/leopard.jpg'),
    owl: require('./img/owl.jpg'),
    peacock: require('./img/peacock.jpg'),
    penguin: require('./img/penguin.jpg'),
    rabbit: require('./img/rabbit.jpg'),
    squirrel: require('./img/squirrel.jpg'),
    tiger: require('./img/tiger.jpg'),
    turtle: require('./img/turtle.jpg'),
    zebra: require('./img/zebra.jpg')
};

const answerlist = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

const Questions = ({ picture, index }) => {
    return (
        <View style={{ marginVertical: 10, alignItems: 'center' }}>
            <Text>What animal is this?</Text>
            <Image source={picture} style={{ width: 400, height: 300 }} />
            <RNPickerSelect
                onValueChange={(value) => {
                    answerlist[index] = value;
                }}
                items={animals.map(animal => ({ label: animal, value: animal }))}
            />
        </View>
    );
}

export default function AnimalApp() {
    const [score, setScore] = useState(0);

    const handleSubmit = () => {
        let currentScore = 0;
        for (let i = 0; i < animals.length; i++) {
            if (animals[i] === answerlist[i]) {
                currentScore++;
            }
        }
        setScore(currentScore);

        if (currentScore <= 12){
            Alert.alert(`You can do better next time. Your score is: ${currentScore}`);
        }
        else{
            Alert.alert(`Well done! Your score is: ${currentScore}`);
        }

    }

    return (
        <ScrollView>
            <View>
                <View style={{ flexDirection: 'row'}}>
                    <Icon name={"cloud"} size={20} color="#93c5e6" style={{fontSize: 24}} />
                    <Text style={{ fontFamily: 'FontAwesome6', fontSize: 24, textTransform: 'uppercase', marginLeft: 5, color: '#747474' }}>
                        AnimalsQuiz
                    </Text>
                </View>
                {animals.map((animal, index) => (
                    <Questions key={animal} picture={animalImages[animal]} index={index} />
                ))}
                <Button
                    title="Submit Answers"
                    color="#2296f3"
                    onPress={handleSubmit}
                />
                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
}


