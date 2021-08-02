import { createStackNavigator, createAppContainer } from 'react-navigatiion';
import IndexScreen from '.src/IndexScreen';

const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName = 'Index', 
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

export default createAppContaniner(navigator)