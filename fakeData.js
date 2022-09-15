const artists = [
  {
    id: 1,
    name: 'laib laus',
  },
  {
    id: 2,
    name: 'destiny',
  },
  {
    id: 3,
    name: 'the sounders',
  },
  {
    id: 4,
    name: 'david yang',
  },
];

const albums = [
  {
    id: 232,
    name: 'Hli xiab',
    artistId: 2,
  },
  {
    id: 4,
    name: 'Laib laug',
    artistId: 1,
  },
  {
    id: 12,
    name: 'koj',
    artistId: 3,
  },
  {
    id: 12,
    name: 'koj ib leeg xwb',
    artistId: 4,
  },
];

const songs = [
  { id: 6, name: 'laib laus california', artistId: 1, albumId: 4 },
  {
    id: 7,
    name: 'hlub koj ntsiag to',
    artistId: 2,
    albumId: 232,
  },
  {
    id: 4,
    name: 'Pais mi kas',
    artistId: 3,
    albumId: 12,
  },
  {
    id: 1,
    name: 'npau suav',
    artistId: 4,
    albumId: 12,
  },
];

module.exports = { artists, albums, songs };
