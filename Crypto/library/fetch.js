const default_options = { method : "GET" };

export async function getApi(url,options = default_options){
    let response = await fetch(url,options);
    if (response.ok) {
        return await response;
    } else {
        return response.status;
    }
}

