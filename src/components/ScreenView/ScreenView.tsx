import React from 'react';

import { View, StyleProp, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './styles';

type Props = {
    screenStyles?: StyleProp<ViewStyle>;
    children: JSX.Element | JSX.Element[];
}

const ScreenView = (props: Props) => {
    const { screenStyles = {}, children } = props;

    const insets = useSafeAreaInsets();

    const padding = {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left + 10,
        paddingRight: insets.right + 10,
    };

    return(
        <View style={[styles.screen, padding, screenStyles]}>{children}</View>
    );
}

export default ScreenView;
