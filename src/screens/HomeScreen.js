import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Camera')}>
        <Icon name="camera" size={130} color="#00334d" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Gallery')}>
        <Text style={styles.Galery}>Galeria de Fotos</Text>
         
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f7ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  },
  iconContainer: {
    margin: 20,
    //backgroundColor: "#00334d",
    borderRadius: 30
  },
  Galery:{
    paddingTop: 70,
    alignItems: 'center',
    color:"#00334d",
    fontSize:30,
    // width:40,
    // height:35,
    // borderColor:"#00334d"
    
  },

});
