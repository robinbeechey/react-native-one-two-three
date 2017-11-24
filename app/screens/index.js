import { Navigation } from 'react-native-navigation';
import Home from './Home';
import Ranks from './Ranks';
import Settings from './Settings';
import Profile from './Profile';
import Modal from './Modal';


export function registerScreens(store, Provider) {
	Navigation.registerComponent('wordgame.Home', () => Home, store, Provider);
	Navigation.registerComponent('wordgame.Ranks', () => Ranks, store, Provider);
	Navigation.registerComponent('wordgame.Settings', () => Settings, store, Provider);
	Navigation.registerComponent('wordgame.Profile', () => Profile, store, Provider);
	Navigation.registerComponent('wordgame.Modal', () => Modal, store, Provider);
}

