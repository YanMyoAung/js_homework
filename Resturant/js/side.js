async function getData(url) {
    const response = await fetch(url);
    if (response.ok) {
        return await response.json();
    } else {
        return null;
    }
}

const g_id = (id) => document.getElementById(id);
const data = await getData("https://dummyjson.com/recipes?limit=50");

load_side_options("cuisine_box","cuisine",template_Cuisine);
load_side_options("difficulty_box","difficulty",template_Difficulty);

function getSideData(data,keyword){
    let result = [];
    for(const prop of data.recipes){
        if(!result.includes(prop[keyword])){
            result.push(prop[keyword]);
        }
    }
    return result;
}

function load_side_options(rootID,sideName,template){
    let root = g_id(rootID);
    root.innerHTML = "";
    let sideData = getSideData(data,sideName);
    for(const prop of sideData){
        root.innerHTML += template(prop);
    }
}

function template_Cuisine(cuisine){
    return `
    <label class="checkbox_container"
                >${cuisine}
                <input type="checkbox" value="${cuisine}" />
                <span class="checkmark"></span>
              </label>
    `;
}

function template_Difficulty(difficulty){
    return `
    <label class="checkbox_container"
                >${difficulty}
                <input type="checkbox" value="${difficulty}" />
                <span class="checkmark"></span>
              </label>
    `;
}

