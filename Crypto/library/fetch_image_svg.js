import { getApi } from "./fetch.js";

export async function getBlobImage(url){
    let response = await getApi(url); 
    let blob = await response.blob();  
    let src =  URL.createObjectURL(blob);
    return src;
}