import React, { useState, useDeferredValue } from 'react';

import { useQuery } from 'react-query';

import { Text, TextInput } from 'react-native';

import ScreenView from '../../components/ScreenView';

import { fetchTopAlbums } from '../../services/api';

import AlbumsList from './components/AlbumsList';

import styles from './styles';

const HomeScreen = () => {
    const [artist, setArtist] = useState('');

    const deferredArtist = useDeferredValue(artist);

    const { data: albums, isLoading, error } = useQuery(
        ['topAlbums', deferredArtist],
        () => fetchTopAlbums(deferredArtist),
        { enabled: deferredArtist.length > 0 }
    );

    const handleInputChange = (text: string) => {
        setArtist(text);
    };

    return (
        <ScreenView>
            <TextInput
                value={artist}
                autoFocus
                placeholder="Search Artist (e.g., Bon Jovi)"
                style={styles.input}
                onChangeText={handleInputChange}
            />

            {
                isLoading
                ? <Text>Loading...</Text>
                : error
                ? <Text>Error fetching albums</Text>
                : <AlbumsList albums={albums} />
            }
        </ScreenView>
    );
};

export default HomeScreen;
