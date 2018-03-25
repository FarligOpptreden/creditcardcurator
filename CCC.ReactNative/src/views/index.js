import { Navigation } from 'react-native-navigation';
import { DashboardView } from './dashboardView';
import { ProfileView } from './profileView';

const registerScreens = () => {
  Navigation.registerComponent(DashboardView.TAB_DEFINITION.screen, _ => DashboardView );
  Navigation.registerComponent(ProfileView.TAB_DEFINITION.screen, _ => ProfileView );
}
const initialTabs = () => [
  DashboardView.TAB_DEFINITION,
  ProfileView.TAB_DEFINITION
]

export {
  // View exports
  DashboardView,
  ProfileView,
  // Screen bootstrapping exports
  registerScreens,
  initialTabs
}