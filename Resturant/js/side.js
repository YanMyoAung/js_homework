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

load_side_options("cuisine_box","cuisine",template_side_options,"cuisine",getSideData);
load_side_options("difficulty_box","difficulty",template_side_options,"difficulty",getSideData);
load_side_options("food_type_box","mealType",template_side_options,"foodType",getMealType);

function getSideData(data,keyword){
    let result = [];
    for(const prop of data.recipes){
        if(!result.includes(prop[keyword])){
            result.push(prop[keyword]);
        }
    }
    return result;
}

function getMealType(data){
    let result = [];
    for(const prop of data.recipes){
        for(const meal of prop.mealType){
            if(!result.includes(meal)){
                result.push(meal);
            }
        }
    }
    return result;
}

function load_side_options(rootID,sideName,template,checkboxName,getDataFunction){
    let root = g_id(rootID);
    root.innerHTML = "";
    let sideData = getDataFunction(data,sideName);
    for(const prop of sideData){
        root.innerHTML += template(prop,checkboxName);
    }
}

function template_side_options(type,name){
    return `
    <label class="checkbox_container"
                >${type}
                <input type="checkbox" value="${type}" name="${name}" />
                <span class="checkmark"></span>
              </label>
    `;
}



