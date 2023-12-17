import { getApi } from "./fetch.js";

export async function getBtcPrice(url){
    let response = await getApi(url);
    if(response.ok){
        showMessage(await response.json());
        await getBtcPrice(url);
    }else if(response.status === 502){
        await getBtcPrice(url,options);
    }else{
        showMessage(await response.json());
        await new Promise(resolve => setTimeout(resolve, 1000));
        await getBtcPrice(url);
    }    
}

function showMessage(result){
    if(result.bpi.USD.rate){
        document.getElementById('btc_price').innerHTML = result.bpi.USD.rate;
    }
}


