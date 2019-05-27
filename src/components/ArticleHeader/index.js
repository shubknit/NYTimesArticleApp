import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Header Component */

export const ArticleHeader = () => {
  return (
    <View style={styles.headerStyle}>
      <View style={styles.menu}>
        <Icon name="navicon" color="white" size={30}/>
      </View>
      <View>
        <Text style={styles.textStyle}>
          NyTimes Most Popular
        </Text>
      </View>
      <View style={styles.search}>
        <Icon name="search" color="white" size={30}/>
      </View>
    </View>
  )
}
