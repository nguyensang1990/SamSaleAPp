import React, { Component } from 'react';
import { Modal, View , TouchableOpacity} from 'react-native';
import { Button, Text, Icon, Avatar, Divider, CheckBox } from 'react-native-elements';

import { mainColor } from './Color';

const  ConfirmFood = ({
  visible, item, outPress, check, counter,
  press1, press2, addButtonPress, addPress, minusButtonPress
  }) => {
    return (
      <Modal
        animation='fade'
        visible={visible}
        transparent
      >
        <TouchableOpacity
          activeOpacity={1}
          style={{
            backgroundColor: 'rgba(139, 171, 221,0.5)',
            flex: 1,
            transparent: 0.5,
            flexDirection: 'column',
            justifyContent: 'space-around'

          }}
          onPressOut={outPress}
        >
          <TouchableOpacity
            style={{}}
            onPress={()=>{console.log(item)}}
            activeOpacity={1}
          >
          <View style={{ backgroundColor: mainColor, padding: 5,paddingTop: 20, paddingBottom: 20}}>
          <View style={{ flexDirection: 'row'}}>
            <View>
              <Avatar
                large
                containerStyle={{ marginRight: 10 }}
                source={require('../../data/duck.jpg')}s
              />
            </View>
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{item.ProductName}</Text>
              <Text>{`${(item.Price|| 0).toLocaleString('en')} VNĐ`}</Text>
              <View style={{flexDirection:'row'}}>
                <Icon
                name='indeterminate-check-box'
                size={30}
                color='white'
                onPress={minusButtonPress}/>

              <Text style={{alignSelf:'center', marginRight: 5, marginLeft: 5}} h4>{counter}</Text>

                <Icon
                name='add-box'
                size={30}
                color='white'
                onPress={addButtonPress}/>
              </View>
            </View>

          </View>
          <Divider style={{ backgroundColor: '#84741b', marginTop: 20, marginBottom: 10 }} />
          <Text style={{color:'white', alignSelf:'center', fontWeight:'bold'}} h4>Lựa chọn</Text>
          <View style={{ flexDirection: 'row', width:'100%' }}>
            <CheckBox
              center
              title='Chặt'
              uncheckedIcon='circle-o'
              checkedIcon='dot-circle-o'
              checked={(check==='chat')}
              onPress={press1}
              containerStyle={{backgroundColor:'white', flexGrow: 1, flexBasis:'40%'}}
            />

            <CheckBox
              center
              title='Để Nguyên'
              uncheckedIcon='circle-o'
              checkedIcon='dot-circle-o'
              checked={(check==='denguyen')}
              onPress={press2}
              containerStyle={{backgroundColor:'white', flexGrow: 1, flexBasis:'40%'}}
            />
          </View>
            <Button
              large
              color= 'black'
              containerViewStyle={{ padding: 0, marginLeft: 10, marginRight: 10 }}
              buttonStyle={{ alignSelf: 'stretch', margin: 0, marginTop: 10, backgroundColor: 'white' }}
              title='Thêm vào giỏ hàng'
              onPress={addPress}
            />
          </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    )
}

export default ConfirmFood;
