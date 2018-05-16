import React from 'react';
import { Modal, View , TouchableOpacity, ActivityIndicator } from 'react-native';
import { Button, Text, Divider } from 'react-native-elements';

const  Loading = ({ visible }) => {
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
          onPressOut={() => {}}
        >
          <TouchableOpacity
            style={{}}
            onPress={()=>{}}
            activeOpacity={1}
          >
          <View style={styles.viewStyle}>
            <Text style={{ color: 'white', fontWeight: 'bold' }} h3>Đang Tải Dữ Liệu</Text>
            <ActivityIndicator 
                color= 'white'
                size='large'
            />
            <Text style={{ color: 'white', fontWeight: 'bold' }} h4>Vui lòng chờ...</Text>
          </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    )
}

const styles = {
    viewStyle : { 
        backgroundColor: '#e8c502', 
        padding: 5,
        paddingTop: 20, 
        paddingBottom: 20, 
        alignItems: 'center',
        height: 200,
        justifyContent: 'space-between',
     }
}

export default Loading;
