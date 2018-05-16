import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import {
  Card,
  ListItem,
  Button,
  Text,
  Avatar,
  Icon
} from 'react-native-elements';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions';

import { mainColor } from './common/Color';

class Cart extends Component {
  getTotal() {
    const { cart } = this.props.addToCart;
    const sumArr = cart.map(a => a.Price * a.num);
    let total = 0;
    sumArr.forEach(item => {
      total += item;
    });
    return total.toLocaleString('en');
  }

  removeFoodfromCart(i) {
    let { cart, cartCounter } = this.props.addToCart;
    if (cart[i].num > 0) cart[i].num--;
    if (cart[i].num === 0) cart.splice(i, 1);
    if (cartCounter > 0) cartCounter--;
    this.props.removeFromCart({ cart, cartCounter });
  }

  render() {
    const { itemStyle } = styles;
    return (
      <ScrollView>
        {this.props.addToCart.cart.map((l, i) => (
          <ListItem
            containerStyle={itemStyle}
            key={i}
            leftIcon={
              <Avatar
                large
                rounded
                source={require('../data/duck.jpg')}
                activeOpacity={0.7}
              />
            }
            title={
              <Text
                style={{
                  fontWeith: 'bold',
                  fontSize: 17,
                  textAlign: 'justify'
                }}
              >
                {l.ProductName}
              </Text>
            }
            subtitle={
              <View style={{ paddingLeft: 10 }}>
                <Text>Đơn Giá: {l.Price.toLocaleString('en')}</Text>
                <Text>Số Lượng: {l.num}</Text>
                <Text>
                  Thành Tiền: {(l.Price * l.num).toLocaleString('en')}
                </Text>
                <Text>
                  Hình Thức: {l.check === 'chat' ? 'Chặt' : 'Để Nguyên'}
                </Text>
              </View>
            }
            rightIcon={
              <Icon
                name="remove-shopping-cart"
                size={30}
                color="#e8c502"
                onPress={() => {
                  this.removeFoodfromCart(i);
                }}
              />
            }
          />
        ))}
        <Card title="Total: ">
          <Text style={{ alignSelf: 'center' }} h3>
            {this.getTotal()}
          </Text>
        </Card>
        <Button
          title="Check Out"
          backgroundColor={mainColor}
          textStyle={{
            fontWeight: 'bold',
            fontSize: 25,
            padding: 0,
            margin: 0
          }}
          onPress={() => this.props.navigation.navigate('DeliveryForm')}
        />
      </ScrollView>
    );
  }
}

const styles = {
  itemStyle: {
    height: 120,
    justifyContent: 'center'
  }
};

const mapStateToProps = state => ({
    addToCart: state.addToCart
  });

export default connect(mapStateToProps, { removeFromCart })(Cart);
