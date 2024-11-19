import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Image, Text } from 'react-native';

import CustomPressable from '../../../../components/CustomPressable';

import styles from './styles';
import { AlbumType } from '../../../../services/apiTypes';

type Props = {
    album: AlbumType;
    index: number;
}

const AlbumsList = (props: Props) => {
    const { album, index } = props;

    const navigation = useNavigation();

    const onAlbumPress = () => {
        navigation.navigate('AlbumScreen', { albumId: album.mbid, albumName: album.name, artistName: album.artist.name });
    };

    return (
        <CustomPressable
            buttonStyles={styles.container}
            onPress={onAlbumPress}
        >
            <Text style={styles.number}>{index + 1}.</Text>

            {
                album?.image?.[2]?.['#text']
                ? (
                    <Image
                        source={{ uri: album.image[2]['#text'] }}
                        style={styles.image}
                    />
                )
                : <Text style={styles.noImageText}>No Image</Text>
            }

            <Text>{album.name}</Text>
        </CustomPressable>
    );
};

export default AlbumsList;
