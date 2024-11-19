import * as React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthScreen from './screens/AuthScreen'
import HomeScreen from './screens/HomeScreen';
import AlbumScreen from './screens/AlbumScreen';
import AlbumDetailsScreen from './screens/AlbumDetailsScreen';

const queryClient = new QueryClient();

const RootStack = createNativeStackNavigator({
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
