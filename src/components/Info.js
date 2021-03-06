import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Button, Text, Icon } from 'react-native-elements';
import Communications from 'react-native-communications';

import { mainColor } from './common/Color';

class Info extends Component {
  render () {
    const { textStyle, iconStyle, buttonStyle, buttonTitleStyle, cardTitle } = styles;

    return (
      <ScrollView>
        <Card
          titleStyle={cardTitle}
          title='Ottawa Shop'>
          <View style={textStyle}>
            <Icon containerStyle={iconStyle} name='location-on' size={20} />
            <Text>1234 Bank St Ottawa</Text>
          </View>
          <View style={textStyle}>
            <Icon containerStyle={iconStyle} name='phone' size={20} />
            <Text>00000000000</Text>
          </View>
          <View style={textStyle}>
            <Icon containerStyle={iconStyle} name='access-time' size={20} />
            <Text>06h00 - 22h00</Text>
          </View>

          <Button
            textStyle={buttonTitleStyle}
            buttonStyle={buttonStyle}
            onPress={() => Communications.phonecall('0907441667', true)}
            title='Call us'
          />
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  textStyle: {
    marginBottom: 7,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    textAlign: 'center',
    padding: 0,
    alignItems: 'center'
  },
  iconStyle: {
    paddingRight: 10
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 5
  },
  buttonStyle: {
    backgroundColor: mainColor,
    width: 200,
    height: 45,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
    padding: 0
  },
  buttonTitleStyle: {
    fontWeight: 'bold',
    fontSize: 25
  }
};

export default Info;
