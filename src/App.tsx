import * as React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

import { createStaticNavigation, RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import AlbumScreen from './screens/AlbumScreen';
import AlbumDetailsScreen from './screens/AlbumDetailsScreen';

export type RootStackParamList = {
  AuthScreen: undefined;
  HomeScreen: undefined;
  AlbumScreen: { albumId: string; albumName: string; artistName: string };
  AlbumDetailsScreen: { artistName: string };
};

export type AuthScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AuthScreen'
>;
export type AlbumScreenRouteProp = RouteProp<RootStackParamList, 'AlbumScreen'>;
export type AlbumScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AlbumScreen'
>;
export type AlbumDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'AlbumDetailsScreen'
>;
export type AlbumDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AlbumDetailsScreen'
>;

const queryClient = new QueryClient();

const RootStack = createNativeStackNavigator<RootStackParamList>({
  screens: {
    AuthScreen: {
      screen: AuthScreen,
      options: {
        headerShown: false,
      },
    },
    HomeScreen: {
      screen: HomeScreen,
      options: {
        headerShown: false,
      },
    },
    AlbumScreen: {
      screen: AlbumScreen,
      options: {
        headerShown: false,
      },
    },
    AlbumDetailsScreen: {
      screen: AlbumDetailsScreen,
      options: {
        headerShown: false,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;
