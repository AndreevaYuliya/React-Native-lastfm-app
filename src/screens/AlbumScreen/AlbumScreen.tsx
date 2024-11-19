import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { useQuery } from 'react-query';

import { View, Text } from 'react-native';

import ScreenView from '../../components/ScreenView';
import CustomPressable from '../../components/CustomPressable';

import { fetchAlbumTracks } from '../../services/api';

import TracksList from './components/TracksList';

import styles from './styles';

const AlbumScreen = ({ route }) => {
    const navigation = useNavigation();

    const { albumId, albumName, artistName } = route.params;

    const { data: tracks, isLoading, error } = useQuery(
        ['albumTracks', albumId],
        () => fetchAlbumTracks(albumId),
        { enabled: albumId != null }
    );

    return (
        <ScreenView>
            <View style={styles.header}>
                <CustomPressable title="< Go Back" buttonStyles={styles.goBackButton} onPress={navigation.goBack} />

                <Text numberOfLines={1} style={styles.title}>{albumName}</Text>

                <CustomPressable
                    title="Details >"
                    buttonStyles={styles.albumDetailsButton}
                    onPress={() => navigation.navigate('AlbumDetailsScreen', { artistName: artistName })}
                />
            </View>

            {
                isLoading
                ? <Text>Loading...</Text>
                : error
                ? <Text>Error fetching album tracks</Text>
                : <TracksList tracks={tracks} />
            }
        </ScreenView>
    );
};

export default AlbumScreen;
