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

loadMenuDetails(getMenu(retrieveID()));

function retrieveID() {
    let url = window.location.href;
    if (url.includes("#")) {
        return +url.split("#")[1];   
    }
    return null;
}

function getMenu(id) {
    let menu = data.recipes.find(item => item.id === +id);
    return menu ? menu : null;
}

function loadMenuDetails(data) {
    const root = g_id("image_container");
    if (data) {
        root.innerHTML = template_menu_details(data.name, data.image, data.ingredients,
             data.instructions, data.prepTimeMinutes, data.cookTimeMinutes, data.servings,data.tags);
    }
}

function template_tags(tags){
    let data = "";
    for(const tag of tags){
        data += `<span>${tag}</span>`;
    }
    return data;
}

function template_instructions(instructions){
    let data = "";
    for(const instruction of instructions){
        data += `<li>${instruction}</li>`;
    }
    return data;
}

function template_menu_details(name, url, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings,tags) {
    return `
    <div id="european">
    <div id="food_details_container">
          <div id="food_details_img">
            <img src="${url}" />
          </div>
          <div id="food_details_contents">
            <h1>${name}</h1>
            <h3 class="food_details_sub_titles">Ingredients</h3>
            <p class="ingredients">
              - ${ingredients.join(",")}.
            </p>
            <h3 class="food_details_sub_titles">Prepare Time</h3>
            <p class="ingredients">- ${prepTimeMinutes} minutes</p>
            <h3 class="food_details_sub_titles">Cooking Time</h3>
            <p class="ingredients">- ${cookTimeMinutes} minutes</p>
            <h3 class="food_details_sub_titles">Servings</h3>
            <p class="ingredients">- ${servings} people</p>
            <h3 class="food_details_sub_titles">Instructions</h3>
            <div class="ingredients">
              <ul>
                ${template_instructions(instructions)}
              </ul>
            </div>

            <div id="tags">
              ${template_tags(tags)}
            </div>

            <div id="home">
              <a href="menus.html">back to home</a>
            </div>
          </div>
        </div>
        </div>
    `;
}






