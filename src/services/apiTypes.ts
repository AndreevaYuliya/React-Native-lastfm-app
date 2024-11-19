export type TrackType = {
  name: string;
  duration: number;
  url: string;
};

export type AlbumType = {
  mbid: string;
  name: string;
  artist: {
    name: string;
  };
  image: {
    '#text': string;
  }[];
  tracks: TrackType[];
};
