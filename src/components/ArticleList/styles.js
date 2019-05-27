import {StyleSheet} from 'react-native';

/* Styling for Article List Component */

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageSection: {
    justifyContent: 'center'
  },
  rightSection: {
    width: '70%',
    paddingLeft: 20
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    paddingBottom: 10
  },
  byline: {
    fontSize: 15
  },
  bottomSection: {
    paddingTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  section: {
    fontSize: 15,
    textTransform: 'uppercase',
    paddingTop: 5
  },
  date: {
    paddingLeft: 10
  },
  chevronSection: {
    paddingLeft: 20,
    justifyContent: 'center'
  }
});
