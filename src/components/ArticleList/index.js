import React from 'react'
import {FlatList, View, TouchableOpacity, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';

/* Article List Component */
export const ArticleList = ({articlesData, navigate}) => {

  /* Navigating to article detail when list item is tapped */

  _onPressButton = (item) => {
    navigate('ArticleDetail', {item})
  }

  /* Rendering view for ArticleList */

  renderItem = ({item}) => {
    const imageUrl = item.media[0]['media-metadata'][0].url;
    return (
      <TouchableOpacity onPress= { () => navigate('ArticleDetail', { item }) }>
        <View style={styles.container}>
          <View style={styles.imageSection}>
            <Image
              source={{
              uri: imageUrl
            }}
              style={{
              width: 75,
              height: 75,
              borderRadius: 75/2
            }}/>
          </View>
          <View style={styles.rightSection}>
            <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
            <Text numberOfLines={1} style={styles.byline}>{item.byline}</Text>
            <View style={styles.bottomSection}>
              <View>
                <Text style={styles.section}>{item.section}</Text>
              </View>
              <View style={styles.bottomSection}>
                <View>
                  <Icon name="calendar" color="grey" size={15}/>
                </View>
                <View>
                  <Text style={styles.date}>{item.published_date}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.chevronSection}>
            <Icon name="chevron-right" color="grey" size={20}/>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  /* Returning items as Flatlist */
  return (<FlatList
    data={articlesData}
    keyExtractor=
    { item => item.id.toString() }
    renderItem={this.renderItem}/>)
}
