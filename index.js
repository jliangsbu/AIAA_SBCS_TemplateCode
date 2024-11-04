var api_selection = document.getElementById("api-selection");
var main_data = document.getElementById("main");
var API_KEY = "";

/*
fetch("https://api.api-ninjas.com/v1/planets?min_mass=1", {
    method: 'GET',
    contentType: 'application/json',
    headers: {
        "X-Api-Key": "",
    },
}).then(res => res.json()).then(data => populateWebpagePlanets(data));
*/

api_selection.addEventListener('change', (e) => {
    var api = e.target.value;
    console.log(e.target.value);

    if (api === "stars") {
        main_data.innerHTML = `<div class="filters-section"></div>
                <h4 class="filters-title">Filters</h4>
                
                <div class="filters">
                    <input type = "number" class="input" placeholder="Max Distance (ly)" id = "max-distance"/>
                    <input type = "number" class="input" placeholder="Min Distance (ly)" id = "min-distance"/>
                    <input type = "number" class="input" placeholder="Max Brightness" id = "max-brightness"/>
                    <input type = "number" class="input" placeholder="Min Brightness" id = "min-brightness"/>
                    <button class="filter-button" id = "filter-button" onclick = {createURL()}>Filter Search</button>
                </div>
                
            </div>

            

            <div class="data" id="data">
                
            </div>`;
    } else if (api === "planets") {
        main_data.innerHTML = `<div class="filters-section">
                <h4 class="filters-title">Filters</h4>
                
                <div class="filters">
                    <input type = "number" class="input" placeholder="Max Distance (ly)" id = "max-distance"/>
                    <input type = "number" class="input" placeholder="Min Distance (ly)" id = "min-distance"/>
                    <input type = "number" class="input" placeholder="Max Mass (kg)" id = "max-mass"/>
                    <input type = "number" class="input" placeholder="Min Mass (kg)" id = "min-mass"/>
                    <button class="filter-button" id = "filter-button" onclick = {createURL()}>Filter Search</button>
                </div>
                
            </div>

            

            <div class="data" id="data">
                
            </div>`;
    }
})

function createURL() {
    var list = document.getElementById("data");
    var filter_button = document.getElementById("filter-button");
    
    list.innerHTML = '';
    var url = "https://api.api-ninjas.com/v1/";
    

    console.log(api_selection.value);

    if (api_selection.value === "planets") {
        
        

    } else if (api_selection.value === "stars") {
        
    }
}

function populateWebpagePlanets(data) {
    var list = document.getElementById("data");
    var title, distance, period, mass, box;
    
    for (let i = 0; i < data.length; i++) {
        title = document.createElement("h3");
        distance = document.createElement("h3");
        period = document.createElement("h3");
        mass = document.createElement("h3");

        title.innerHTML = data[i].name;
        distance.innerHTML = "Distance: " + data[i].distance_light_year + " Light Years";
        period.innerHTML = "Period: " + data[i].period;
        mass.innerHTML = "Mass: " + data[i].mass;

        title.classList.add("data-box-header");
        distance.classList.add("data-box-text");
        period.classList.add("data-box-text");
        mass.classList.add("data-box-text");

        box = document.createElement("div");
        box.classList.add("data-box");
        box.appendChild(title);
        box.appendChild(distance);
        box.appendChild(period);
        box.appendChild(mass);

        list.appendChild(box);
    }
}

function populateWebpageStars(data) {
    var list = document.getElementById("data");
    var title, distance, constellation, brightness, box;
    
    for (let i = 0; i < data.length; i++) {
        title = document.createElement("h3");
        distance = document.createElement("h3");
        constellation = document.createElement("h3");
        brightness = document.createElement("h3");

        title.innerHTML = data[i].name;
        distance.innerHTML = "Distance: " + data[i].distance_light_year + " Light Years";
        constellation.innerHTML = "Constellation: " + data[i].constellation;
        brightness.innerHTML = "Period: " + data[i].apparent_magnitude;

        title.classList.add("data-box-header");
        distance.classList.add("data-box-text");
        constellation.classList.add("data-box-text");
        brightness.classList.add("data-box-text");

        box = document.createElement("div");
        box.classList.add("data-box");
        box.appendChild(title);
        box.appendChild(distance);
        box.appendChild(constellation);
        box.appendChild(brightness);

        list.appendChild(box);
    }
}