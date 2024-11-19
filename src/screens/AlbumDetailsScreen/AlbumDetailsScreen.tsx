import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { useQuery } from 'react-query';

import { View, Text, ScrollView } from 'react-native';

import ScreenView from '../../components/ScreenView';
import CustomPressable from '../../components/CustomPressable';

import { fetchArtistBio } from '../../services/api';

import styles from './styles';

const AlbumDetailsScreen = ({ route }) => {
    const navigation = useNavigation();

    const { artistName } = route.params;

    const { data: bio, isLoading, error } = useQuery(
        ['artistBio', artistName],
        () => fetchArtistBio(artistName),
        { enabled: artistName.length > 0 }
    );

    return (
        <ScreenView>
            <View style={styles.header}>
                <CustomPressable title="< Go Back" buttonStyles={styles.goBackButton} onPress={navigation.goBack} />

                <Text style={styles.title}>Artist Bio</Text>
            </View>

            <ScrollView style={styles.screenScrollContainer}>
                {
                    isLoading
                    ? <Text>Loading...</Text>
                    : error
                    ? <Text>Error fetching artist bio</Text>
                    : <Text>{bio}</Text>
                }
            </ScrollView>
        </ScreenView>
    );
};

export default AlbumDetailsScreen;
