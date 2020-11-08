const firebaseAPIKey = 'AIzaSyB6EVbwJNzN-duQ2oCEBwmnvjpXB9DOx6I';
export const CONCERTS_URL = `https://firestore.googleapis.com/v1/projects/smilebusters/databases/(default)/documents/concerts?key=${firebaseAPIKey}`;

const youtubeAPIKey = 'AIzaSyD8_AOJJfBztUSGKL8DP2aYf4FWM_iMLx0';
const playlistId = 'PLQG761_nUb0p0H9d5xwdhxpsN9WMdvVzw';
export const YOUTUBE_PLAYLIST_URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${youtubeAPIKey}&playlistId=${playlistId}&part=snippet&maxResults=50`;
