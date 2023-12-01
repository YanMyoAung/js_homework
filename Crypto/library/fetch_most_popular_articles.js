
import { getApi } from "./fetch.js";

export async function fetch_popular(api_url,api_key) {
    let url = api_url + api_key;
    let options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }

    let result =  await getApi(url,options);
    return result.json();
}