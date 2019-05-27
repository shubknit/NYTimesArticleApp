import {createStackNavigator, createAppContainer} from 'react-navigation';
import  { ArticleHome } from './src/container/ArticleHome';
import { ArticleDetail }  from './src/components/ArticleDetail';
import { ArticleHeader }  from './src/components/ArticleHeader';

/* Navigation Screens */
const MainNavigator = createStackNavigator({
  Home: {
    screen: ArticleHome,
    navigationOptions: () => ({
      header: ArticleHeader
    }),
  },
  ArticleDetail: {
    screen: ArticleDetail,
    navigationOptions: () => ({
      title: 'NY Times Article Detail',
    }),
  }

});

const App = createAppContainer(MainNavigator);

export default App;
