import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList84971Navigator from '../features/NotificationList84971/navigator';
import Settings84970Navigator from '../features/Settings84970/navigator';
import Settings84962Navigator from '../features/Settings84962/navigator';
import UserProfile84960Navigator from '../features/UserProfile84960/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList84971: { screen: NotificationList84971Navigator },
Settings84970: { screen: Settings84970Navigator },
Settings84962: { screen: Settings84962Navigator },
UserProfile84960: { screen: UserProfile84960Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
