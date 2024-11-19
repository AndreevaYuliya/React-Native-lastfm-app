import React from 'react';

import { FlatList } from 'react-native';

import { AlbumType } from '../../../../services/apiTypes';

import AlbumsListItem from '../AlbumsListItem';

type Props = {
    albums: AlbumType[];
}

const AlbumsList = (props: Props) => {
    const { albums = [] } = props;

    return (
        <FlatList
            data={albums}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => <AlbumsListItem album={item} index={index} />}
        />
    );
};

export default AlbumsList;
