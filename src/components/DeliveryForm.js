import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, TextInput } from 'react-native';
import {
  Card,
  Text,
  FormLabel,
  Button,
  ListItem,
  Badge
} from 'react-native-elements';

import { mainColor } from './common/Color';

class DeliveryForm extends Component {
  getTotal () {
    const { cart } = this.props.addToCart;
    const sumArr = cart.map(a => a.Price * a.num);
    let total = 0;
    sumArr.forEach(item => {
      total += item;
    });
    return total.toLocaleString('en');
  }

  render () {
    const { inputFieldStyle, infoStyle } = styles;
    const { cart } = this.props.addToCart;
    const { currentUser } = this.props.authData;
    return (
      <ScrollView>
        <Card
          containerStyle={{ padding: 0, margin: 0 }}
          imageProps={{ resizeMode: 'cover', backgroundColor: 'black' }}
          imageWrapperStyle={{ backgroundColor: mainColor }}
          image={require('../data/banner1.jpg')}
        >
          <Text style={{ alignSelf: 'center', color: 'white', fontWeight: 'bold' }} h3>{currentUser.FullName}</Text>
        </Card>

        <Card containerStyle={{ padding: 0, margin: 0 }} >
          {
            cart.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  title={item.ProductName}
                  rightIcon={
                    <Text>{(item.Price * item.num).toLocaleString('en')}</Text>
                  }
                  leftIcon={
                    <Badge
                      containerStyle={{ backgroundColor: 'black', padding: 5, borderRadius: 0, marginRight: 5 }}
                      value={item.num}
                      textStyle={{ color: 'orange', fontWeight: 'bold' }}
                    />
                  }
                />
              );
            })
          }
          <Text style={{ alignSelf: 'center' }} h3>
            {this.getTotal()}
          </Text>
        </Card>

        <Card containerStyle={{ padding: 0, margin: 0 }} >
          <View style={infoStyle}>
            <Text h4>{currentUser.PhoneNumber}</Text>
            <FormLabel>Adress</FormLabel>
            <TextInput
              style={inputFieldStyle}
              multiline
              numberOfLines={4}
              placeholder='Your address'
              autoCorrect={false}
            />
          </View>
          <Button
            title='Confirm to Diliver'
            backgroundColor={mainColor}
            textStyle={{
              fontWeight: 'bold',
              fontSize: 25,
              padding: 0,
              margin: 0
            }}
            onPress={() => { console.log(currentUser); }}
          />
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  inputFieldStyle: {
    height: 50,
    width: 300,
    paddingRight: 15,
    paddingLeft: 15,
    marginBottom: 10,
    marginTop: 10

  },
  infoStyle: {
    flexDirection: 'column',
    alignItems: 'center'
  }
};

const mapStateToProps = state => {
  return {
    addToCart: state.addToCart,
    authData: state.authData
  };
};

export default connect(mapStateToProps)(DeliveryForm);
