import { AppRegistry, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { TabStyles } from './styles';
import { initialTabs, registerScreens } from './views';

registerScreens();

Navigation.startTabBasedApp({
  tabs: initialTabs(),
  animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
  tabsStyle: TabStyles.tabs,
  appStyle: TabStyles.app
});