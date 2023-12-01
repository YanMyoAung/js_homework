import { fetch_popular,getBlobImage,getBtcPrice } from '../js/main_index.js';

//fetch nytimes latest popular news
let most_popular_api_url = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=';
const most_popular_api_key = 'rKv24OcrOTNNCDfC0VJvVIbbQniX47Po';
let result = await fetch_popular(most_popular_api_url,most_popular_api_key);
console.log(result);

//get blobimage 
let blob_image_url = "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg";
let src = await getBlobImage(blob_image_url);
document.getElementById('blob_img').src = src;

let btc_price_url = "https://api.coindesk.com/v1/bpi/currentprice.json";
getBtcPrice(btc_price_url);

