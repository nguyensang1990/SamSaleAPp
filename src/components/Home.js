import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, ListItem, Button, Text } from 'react-native-elements';

import { mainColor } from './common/Color';

class Home extends Component {
  render() {
    const { buttonStyle, textStyle } = styles
    return (
      <ScrollView>
        <Card
          imageProps={{resizeMode: 'cover', backgroundColor:'black'}}
          imageWrapperStyle={{backgroundColor: mainColor}}
          image={require('../data/banner1.jpg')}
          >
          <Text style={textStyle} h4>
            The Sam Sale App
          </Text>
          <Text style={textStyle}>
            This is the application for your shop to bring the your customers the best shopping experience
          </Text>
        </Card>

        <Card
          imageProps={{resizeMode: 'cover'}}
          imageWrapperStyle={{padding: 5, backgroundColor:'black'}}
          image={require('../data/coffee.jpg')}
        >
        </Card>

        <Card
          imageProps={{resizeMode: 'contain', backgroundColor:'black'}}
          imageWrapperStyle={{backgroundColor: mainColor}}
          image={require('../data/coffee2.jpg')}
          title="PROMOTION"
          containerStyle={{backgroundColor:mainColor}}
        >
          <Text style={textStyle}>
            Sale off 50%
          </Text>

          <Text style={textStyle} h4>
            use your code: SAMAPP
          </Text>
        </Card>

      </ScrollView>
    )
  }
}

const styles = {
  buttonStyle:{
    backgroundColor: "#f2cf5c",
    width: 200,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
    padding:0
  },
  textStyle:{
    marginBottom: 10,
    alignSelf:'center',
    textAlign:'center',
    color: 'white'
  }
}

export default Home;
