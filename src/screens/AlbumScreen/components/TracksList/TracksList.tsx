import React from 'react';

import { FlatList } from 'react-native';

import { TrackType } from '../../../../services/apiTypes';

import TracksListItem from '../TracksListItem';

type Props = {
    tracks: TrackType[];
}

const TracksList = (props: Props) => {
    const { tracks } = props;

    return (
        <FlatList
            data={tracks}
            keyExtractor={(item) => item.url}
            renderItem={({ item, index }) => <TracksListItem track={item} index={index} />}
        />
    );
};

export default TracksList;
