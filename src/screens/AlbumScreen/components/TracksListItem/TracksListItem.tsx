import React from 'react';

import { View, Text } from 'react-native';

import { formatTime } from '../../../../helpers/time';
import { TrackType } from '../../../../services/apiTypes';

import styles from './styles';

type Props = {
    track: TrackType;
    index: number;
}

const TracksListItem = (props: Props) => {
    const { track, index } = props;

    return (
        <View style={styles.container}>
            <Text><Text style={styles.number}>{index + 1}.</Text> {track.name}</Text>
            <Text>{formatTime(track.duration)}</Text>
        </View>
    );
};

export default TracksListItem;
