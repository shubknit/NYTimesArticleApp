import React from 'react';
import {View, Text, Image } from 'react-native';
import { styles } from './styles';

/* Article Detail Component using props as a single item of article */

export const ArticleDetail =  (props) => {
 const item =  props.navigation.getParam('item');
 const imageUrl = item.media[0]['media-metadata'][1].url;
 const { title, byline, published_date } = item; 
 const { caption, copyright } = item.media[0];
  return (
    <View style = {styles.container}>
      <Text style = { styles.title}> { title }</Text>
      <Image source = {{ uri: imageUrl }} style = {{ height: 293 } }/>
      <Text style = { styles.copyright }> { copyright}</Text>
      <View style =  {styles.captionContainer}>
        <Text style = { styles.byline }> { byline }</Text>
        <Text style = { styles.date }> { published_date }</Text>
        <Text style = { styles.caption }> { caption }</Text>
      </View>
    </View>
  )
}
