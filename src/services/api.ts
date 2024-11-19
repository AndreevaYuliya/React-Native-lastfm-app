import axios from 'axios';

const API_URL = 'https://ws.audioscrobbler.com/2.0/';
const API_KEY = '0c33eb5c7a04e4487d4f51fc752bd5ac';
const RESPONSE_FORMAT = 'json';

export const fetchTopAlbums = async (artist: string) => {
    const response = await axios.get(API_URL, {
        params: {
            method: 'artist.gettopalbums',
            artist,
            api_key: API_KEY,
            format: RESPONSE_FORMAT,
        },
    });

    return response.data.topalbums.album;
};



export const fetchAlbumTracks = async (albumId: string) => {
    const response = await axios.get(API_URL, {
        params: {
            method: 'album.getInfo',
            mbid: albumId,
            api_key: API_KEY,
            format: RESPONSE_FORMAT,
        },
    });

    return response.data.album.tracks.track;
};

export const fetchArtistBio = async (artistName: string) => {
    const response = await axios.get(API_URL, {
        params: {
            method: 'artist.getinfo',
            artist: artistName,
            api_key: API_KEY,
            format: RESPONSE_FORMAT,
        },
    });

    return response.data.artist.bio.summary;
};
