const default_options = { method : "GET" };

export async function getData(url,options = default_options) {
    let response = await fetch(url,options);
    if (response.ok) {
        return await response;
    } else {
        return response.status;
    }
}


