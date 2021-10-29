import {Navigation} from 'react-native-navigation';
import {withNavigationProvider} from 'react-native-navigation-hooks';
import BrowseScreen from './screens/BrowseScreen';
import DetailScreen from './screens/DetailScreen';

export const registerScreens = () => {
  Navigation.registerComponent(
    'BrowseScreen',
    () => withNavigationProvider(BrowseScreen),
    () => BrowseScreen,
  );
  Navigation.registerComponent(
    'DetailScreen',
    () => withNavigationProvider(DetailScreen),
    () => DetailScreen,
  );
};
