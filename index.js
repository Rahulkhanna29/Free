/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SplashScreen from './Components/SplashScreen';
import LoginPage from './Components/LoginPage';
import CustomTextinput from './Components/CustomTextinput';
import CustomButton from './Components/CustomButton';
import SignUp from './Components/SignUp';
import Profile from './TabScreens/Profile';
import TabBottom from './TabScreens/TabBottom';
import Home from './TabScreens/Home';
import Setting from './TabScreens/Setting';
import Wallet from './TabScreens/Wallet';
import Wings from './Components/Wings';


AppRegistry.registerComponent(appName, () =>SplashScreen);
