import React from 'react';
import { StyleSheet, View} from 'react-native';

import MyStackNavigator from './routes/stackNavigation';

export default function App() {

  return (
  
      <View style={styles.container}>
        <MyStackNavigator />
      </View>
   
  );
}

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignContent:'center',
          justifyContent:'center'
        },
       
      });
