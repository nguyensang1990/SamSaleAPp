import React from 'react';
import { Modal, View , TouchableOpacity } from 'react-native';
import { Button, Text, Divider } from 'react-native-elements';

const  Warning = ({ visible }) => {
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
            onPress={()=>{}}}
            activeOpacity={1}
          >
          <View style={{ backgroundColor: '#e8c502', padding: 5,paddingTop: 20, paddingBottom: 20}}>
          <View style={{ flexDirection: 'row'}}>
            <View>
              <Text h3>VUI LÒNG ĐĂNG NHẬP</Text>
            </View>

          </View>
          <Divider style={{ backgroundColor: '#84741b', marginTop: 20, marginBottom: 10 }} />
          <Text style={{color:'white', alignSelf:'center', fontWeight:'bold'}} h4>Lựa chọn</Text>
            <Button
              large
              color= 'black'
              containerViewStyle={{ padding: 0, marginLeft: 10, marginRight: 10 }}
              buttonStyle={{ alignSelf: 'stretch', margin: 0, marginTop: 10, backgroundColor: 'white' }}
              title='ĐĂNG NHẬP'
              onPress={addPress}
            />
          </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    )
}

export default Warning;
