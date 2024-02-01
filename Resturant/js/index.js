async function getData(url) {
    const response = await fetch(url);
    if (response.ok) {
        return await response.json();
    } else {
        return null;
    }
}
const itemsPerPage = 16; // Set the number of items per page
let currentPage = 1;
const g_id = (id) => document.getElementById(id);
const data = await getData("https://dummyjson.com/recipes?limit=50");

loadReciepes(data,currentPage,itemsPerPage);

function loadReciepes(data, page, itemsPerPage) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    let current_data = data.recipes.slice(startIndex, endIndex);
    let root = g_id('european');
    root.innerHTML = "";
    root.innerHTML = template_European();
    console.log(current_data);
    for (const property of current_data) {
        root.innerHTML += template_Menus(property.id, property.image, property.name);
    }
    createPaginationButtons(data.recipes.length,itemsPerPage);
}

function template_European() {
    return `<div id="european_title_wrapper">
    <h2 id="european_title">MENUS</h2>
      </div>`;
}

function template_Menus(id, url, name) {
    return `<div class="image_box">
    <a href="details.html#${id}">
    <img
      src="${url}"
      alt="Avatar"
      class="image"
    />
    <div class="overlay_inner"></div>
    <div class="overlay">
        <h2>${name}</h2>  
    </div>
    </a>
    </div>`;
}

//pagination 

function createPaginationButtons(totalItems, itemsPerPage) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("a");
        button.textContent = i;
        if(i === 1){
            button.classList.add("active");
        }
        button.onclick = function () {
            currentPage = i;
            loadReciepes(data, currentPage, itemsPerPage);
            updateActiveButton(i);
        };
        paginationContainer.appendChild(button);
    }
}

function updateActiveButton(activePage) {
    let paginationContainer = document.getElementById("pagination");
    const buttons = paginationContainer.getElementsByTagName("a");
    for (let i = 0; i < buttons.length; i++) {
        if (i + 1 === activePage) {
            buttons[i].classList.add("active");
        } else {
            buttons[i].classList.remove("active");
        }
    }
}




