import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/router';

Navigation.events().registerAppLaunchedListener(async () => {
    registerScreens();
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'BrowseScreen'
                        }
                    }
                ]
            }
        }
  });
});
