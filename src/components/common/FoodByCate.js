import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

const FoodByCate = (props) => {
    return (
        <View>
                <Text>{props.ProductName}</Text>
        </View>
    )
} 

export default FoodByCate