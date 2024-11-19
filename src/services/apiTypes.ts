export type AlbumType = {
    mbid: string;
    name: string;
    artist: {
        name: string;
    },
    image: string[];
    tracks: unknown;
}

export type TrackType = {
    name: string;
    duration: number;
    url: string;
}
