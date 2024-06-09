const Google_API_KEY = "AIzaSyCrNPwokgOTeIFacaskJ-oi8WSCc5ZyJOY";
export const youtubeAPI = 
`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=${Google_API_KEY}`;

export const youtube_search_api = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="