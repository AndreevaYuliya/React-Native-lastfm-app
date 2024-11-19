import React from 'react';

import { Pressable, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';

import styles from './styles';

type Props = {
  title?: string;
  titleStyles?: StyleProp<TextStyle>;
  buttonStyles?: StyleProp<ViewStyle>;
  pressedOpacity?: number;
  onPress: () => void;
  children?: JSX.Element | JSX.Element[];
};

const CustomPressable = (props: Props) => {
  const {
    title = null,
    titleStyles = {},
    buttonStyles = {},
    pressedOpacity = 0.2,
    onPress,
    children,
  } = props;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { opacity: pressed ? pressedOpacity : 1 },
        buttonStyles,
      ]}
      onPress={onPress}
    >
      {title && <Text style={[titleStyles]}>{title}</Text>}

      {children}
    </Pressable>
  );
};

export default CustomPressable;
