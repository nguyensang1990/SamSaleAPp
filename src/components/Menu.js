import React, { Component } from 'react';
import {
  View,
  FlatList
} from 'react-native';
import {
  ListItem,
  Button,
  Text,
  Icon,
  Avatar
} from 'react-native-elements';
import { connect } from 'react-redux';

import {
  cartCount,
  addFoodToCart,
  removeAllFromCart,
  removeFromCart,
  modifyCart,
  fetchingData
} from '../actions';

import ConfirmFood from './common/ConfirmFood';
import Loading from './common/Loading';
import { mainColor } from './common/Color';

class Menu extends Component {
  
  state = { visible: false, item: {}, check: 'chat', modalcount: 0 };

  componentWillMount() {
    // this.props.fetchingData();
  }

  onPressButton() {
    let { cartCounter } = this.props.addToCart;
    cartCounter += this.state.modalcount;
    this.props.cartCount(cartCounter);
    this.setState({ visible: false, modalcount: 0 });
    console.log(this.state.item);
  }

  getNumOfFood(item) {
    // console.log(l)
    const { cart } = this.props.addToCart;
    let a = 0;
    cart.forEach(item1 => {
      if (item1.ProductId === item.ProductId) {
        return (a += item1.num);
      }
    });
    if (a > 0) {
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/*<Icon
      name='indeterminate-check-box'
      size={30}
      color='#e8c502'
      onPress={() => {
        this.onMinusButton(item)
      }}
      />*/}
          <Text h4>{a}</Text>
        </View>
      );
    }
  }

  foodToCart2() {
    const { cart } = this.props.addToCart;

    cart.forEach(item => {
      if (item.id === this.state.item.id) item.num++;
    });
    this.onPressButton();
  }

  onMinusButton(item) {
    let { cart, cartCounter } = this.props.addToCart;
    if (cartCounter > 0) cartCounter--;
    cart.forEach((food, i) => {
      if (food.id === item.id) {
        if (food.num > 0) food.num--;
        if (food.num === 0) cart.splice(i, 1);
      }
    });
    this.props.removeFromCart({ cart, cartCounter });
  }

  showButton(item) {
    return <Text>{item.name}</Text>;
  }

  addOrLogin(item) {
    const { currentLogin } = this.props.authData;
    if (!currentLogin) {
      this.props.navigation.navigate('LogIn');
    } else this.setState({ visible: true, item });
  }

  foodToCart() {
    this.onPressButton();
    const { ProductId, ProductName, Price, Unit } = this.state.item;
    const { cart } = this.props.addToCart;
    const a = {
      ProductId,
      ProductName,
      Price,
      Unit,
      check: this.state.check,
      num: this.state.modalcount
    };
    if (a.num > 0) {
      if (cart.length === 0) return this.props.addFoodToCart(a);
      if (cart.length > 0) {
        for (let index = 0; index < cart.length; index++) {
          if (
            cart[index].ProductId === a.ProductId &&
            cart[index].check === a.check
          ) {
            const num = cart[index].num + this.state.modalcount;
            return this.props.modifyCart({ index, num });
          }
        }
        return this.props.addFoodToCart(a);
      }
    }
  }

  keyExtractor = (item, index) => index;

  renderItem = ({ item }) => (
    <ListItem
      containerStyle={{
        height: 100,
        justifyContent: 'center'
      }}
      leftIcon={
        <Avatar
          large
          containerStyle={{ marginRight: 10 }}
          source={require('../data/duck.jpg')}
        />
      }
      title={
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
            {item.ProductName}
          </Text>
          <Text>{`${item.Price.toLocaleString('en')} VNĐ/${item.Unit}`}</Text>
        </View>
      }
      rightIcon={
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {this.getNumOfFood(item)}
          <Icon
            name="add-box"
            size={30}
            color={mainColor}
            onPress={() => this.addOrLogin(item)}
          />
        </View>
      }
    />
  );

  press1() {
    this.setState({ check: 'chat' });
  }
  press2() {
    this.setState({ check: 'denguyen' });
  }

  render() {
    const { modalStyle, containerStyle, button1, button2 } = styles;

    return (
      <View style={containerStyle}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.duckData}
          renderItem={this.renderItem}
          extraData={this.props.addToCart.cartCounter}
        />

        <View style={modalStyle}>
          <Button
            backgroundColor={mainColor}
            containerViewStyle={button1}
            title={`${this.props.addToCart.cartCounter} Items`}
            onPress={() => this.props.navigation.navigate('Cart')}
          />
          <Button
            backgroundColor="#1d3359"
            containerViewStyle={button2}
            title="Go to Cart"
            buttonStyle={{ paddingLeft: 0, paddingRight: 0 }}
            onPress={() => this.props.navigation.navigate('DeliveryForm')}
          />
        </View>
        <Loading 
          visible={this.props.loadingData || false}
        />
        <ConfirmFood
          visible={this.state.visible}
          item={this.state.item}
          counter={this.state.modalcount}
          outPress={() => this.setState({ visible: false })}
          check={this.state.check}
          press1={this.press1.bind(this)}
          press2={this.press2.bind(this)}
          minusButtonPress={() =>
            this.setState({
              modalcount:
                this.state.modalcount > 0 ? this.state.modalcount - 1 : 0
            })
          }
          addButtonPress={() =>
            this.setState({ modalcount: this.state.modalcount + 1 })
          }
          addPress={this.foodToCart.bind(this)}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column'
  },
  itemStyle: {
    height: 100,
    justifyContent: 'center'
  },
  modalStyle: {
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  button1: {
    flexGrow: 4,
    marginLeft: 0,
    marginRight: 0
  },
  button2: {
    flexGrow: 1,
    marginLeft: 0,
    flexBasis: '20%',
    marginRight: 0
  }
};

const mapStateToProps = state => {
  return {
    authData: state.authData,
    duckData: state.duckData,
    loadingData: state.duckData.loadingData,
    addToCart: state.addToCart
  };
};

export default connect(mapStateToProps, {
  cartCount,
  addFoodToCart,
  removeAllFromCart,
  removeFromCart,
  modifyCart,
  fetchingData
})(Menu);
