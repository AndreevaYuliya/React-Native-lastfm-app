import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { TextInput, Text } from 'react-native';

import { observer } from 'mobx-react-lite';

import authStore from '../../stores/authStore';

import ScreenView from '../../components/ScreenView';
import CustomPressable from '../../components/CustomPressable';

import styles from './styles';

const AuthScreen = () => {
    const navigation = useNavigation();

    const [username, setUsername] = useState('');

    const handleLogin = () => {
        if (username.trim()) {
            authStore.login();

            navigation.replace('HomeScreen');
        } else {
            alert('Please enter a username');
        }
    };

    return (
        <ScreenView>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter Username"
                value={username}
                onChangeText={setUsername}
            />

            <CustomPressable title="Log In" titleStyles={styles.logInButton} onPress={handleLogin} />
        </ScreenView>
    );
};

export default observer(AuthScreen);