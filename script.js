let namesPokemon = [];
let isLoading = false;
let pokemonMatches = [];
let searchbarOpen = false;
let currentPokemonAmount = 0;
let wantedPokemonAmount = 31;

async function render() {
    await getAllNames();
    showAllPokemon();
}

/*store pokemonnames in array namesPokemon*/
async function getAllNames() {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=151`;
    const response = await fetch(url);
    const responseAsJSON = await response.json();
    const results = responseAsJSON['results'];
    for (let i = 0; i < results.length; i++) {
        namesPokemon.push(results[i]['name']);
    }
}

/*show all pokemon in overview, all beeing small cards, loadsscreen while loading*/
async function showAllPokemon() {
    isLoading = true;
    loadingScreen();
    for (let i = currentPokemonAmount; i < wantedPokemonAmount; i++) {
        await showPokemonOverview(namesPokemon[i], i + 1);
        updateProgressBar(i, currentPokemonAmount, wantedPokemonAmount);
    }
    changePokemonAmount();
    isLoading = false;
    loadingScreen();
}

/*change wanted and currentPokemonAmount to load more pokemon when scroll detected*/
function changePokemonAmount() {
    currentPokemonAmount = wantedPokemonAmount;
    if (wantedPokemonAmount < 151) {
        wantedPokemonAmount += 30;
    }
}

/*show all pokemon in overview (image, name, id*/
async function showPokemonOverview(pokemonName, number) {
    const pokemonDetails = await getData(pokemonName);
    const name = pokemonDetails['species']['name'].charAt(0).toUpperCase() + pokemonDetails['species']['name'].slice(1);
    document.getElementById('containerPokemon').innerHTML += pokemonCardTemplateOverview(name, number);
    document.getElementById(`pokemonImage${number}`).src = `https://cdn.traction.one/pokedex/pokemon/${number}.png`;
    const type = pokemonDetails['types'][0]['type']['name'];
    setBackgroundcolorCard(type, number);
}

/*show and remove loadingscreen*/
function loadingScreen() {
    if (isLoading) {
        document.getElementById('loadingScreen').classList.remove('d-none');
    } else {
        document.getElementById('loadingScreen').classList.add('d-none');
        resetProgressBar();
    }
}

/*get all data for one specific pokemon*/
async function getData(pokemonName) {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    let response = await fetch(url);
    return await response.json();
}

/* when on card in overview clicked, this shows a single selected pokemoncard with more details, while overview is hidden*/
async function showStats(number) {
    let pokemonName = namesPokemon[number - 1];
    const pokemonDetails = await getData(pokemonName);
    showDetails(pokemonDetails, number);
    const types = pokemonDetails['types'];
    showType(types);
    const stats = pokemonDetails['stats'];
    showBaseStats(stats);
}

/*show details of pokemon in single cardview*/
function showDetails(pokemonDetails, number) {
    pokemonName = pokemonDetails['species']['name'].charAt(0).toUpperCase() + pokemonDetails['species']['name'].slice(1);
    document.getElementById('containerStatsPokemon').classList.remove('d-none');
    document.getElementById('containerStatsPokemon').innerHTML = '';
    document.getElementById('containerStatsPokemon').innerHTML = pokemonCardTemplate(pokemonName, number);
    document.getElementById('imgCard').src = `https://cdn.traction.one/pokedex/pokemon/${number}.png`;
    document.getElementById('heightDiv').innerHTML += pokemonDetails['height'];
    document.getElementById('weightDiv').innerHTML += pokemonDetails['weight'];
}

function showType(types) {
    for (let i = 0; i < types.length; i++) {
        const type = types[i]['type']['name'];
        document.getElementById('divTypes').innerHTML += pokemonTypesTemplate(type, i);
        setBackgroundcolorCardTypeSpanCard(type, i);
        if (i == 0) {
            setBackgroundcolorCardStats(type);
        }
    }
}

function showBaseStats(stats) {
    for (let i = 0; i < stats.length; i++) {
        const number = stats[i]['base_stat'];
        const name = stats[i]['stat']['name'];
        document.getElementById('baseStats').innerHTML += pokemonStatsTemplate(name, number);
    }
}

/*in single cardview left arrow clicked to see single cardview of last pokemon in line after id*/
function lastPokemon(number) {
    if (number > 1) {
        showStats(number - 1);
    } else {
        document.getElementById('containerStatsPokemon').classList.add('d-none');
    }
}

/*in single cardview right arrow clicked to see single cardview of next pokemon in line after id*/
function nextPokemon(number) {
    if (number < 151) {
        showStats(number + 1);
    } else {
        document.getElementById('containerStatsPokemon').classList.add('d-none');
    }
}

/*close single cardview*/
function closeStats() {
    document.getElementById('containerStatsPokemon').classList.add('d-none');
}

function dontClose(event) {
    event.stopPropagation();
}

/*search for a pokemon (name)*/
async function searchPokemon() {
    pokemonMatches = [];
    let input = document.getElementById('inputSearch').value.toLowerCase();
    document.getElementById('containerPokemon').innerHTML = '';
    if (input == '') {
        showAllPokemon();
    } else {
        comparePokemonNames(input);
        await showSearchedPokemons();
    }
}

/*compare names after every char*/
function comparePokemonNames(input) {
    for (let i = 0; i < namesPokemon.length; i++) {
        let name = namesPokemon[i];
        for (let j = 0; j < input.length; j++) {
            if (name.charAt(j) == input.charAt(j)) {
                if (pokemonMatches.indexOf(name) == -1) {
                    pokemonMatches.push(name);
                }
            } else {
                const index = pokemonMatches.indexOf(name);
                if (index != -1) {
                    pokemonMatches.splice(index, 1);
                }
                break;
            }
        }
    }
}

/*show all matching pokemon after search details*/
async function showSearchedPokemons() {
    isLoading = true;
    loadingScreen();
    for (let i = 0; i < pokemonMatches.length; i++) {
        const pokemonDetails = await getData(`${pokemonMatches[i]}`);
        await showPokemonOverview(pokemonMatches[i], pokemonDetails['id']);
        updateProgressBar(i, 0, pokemonMatches.length);
    }
    currentPokemonAmount = 0;
    wantedPokemonAmount = 31;
    isLoading = false;
    loadingScreen();
}

/*show and hide searchbar in smaller devices*/
function showSearchBar() {
    if (searchbarOpen) {
        document.getElementById('inputSearch').classList.add('hide450');
        searchbarOpen = false;
        document.getElementById('seachBarOpener').innerHTML = '&#9660';
    } else {
        document.getElementById('inputSearch').classList.remove('hide450');
        searchbarOpen = true;
        document.getElementById('seachBarOpener').innerHTML = '&#128473';
    }
}

/*load more pokemon on scroll*/
async function detectScroll() {
    let maxHeight = document.body.scrollHeight - window.innerHeight;
    let scrollDownPercent = window.scrollY / maxHeight;
    if (scrollDownPercent > 0.9 && isLoading == false) {
        await showAllPokemon();
    }
}

/*show progressbar while loading pokemon*/
function updateProgressBar(i, currentPokemonAmount, wantedPokemonAmount) {
    let goal = wantedPokemonAmount - currentPokemonAmount;
    i = i - currentPokemonAmount;
    let progress = Math.round((i / goal) * 100);
    document.getElementById('progress-bar').innerHTML = `${progress}%`;
    document.getElementById('progress-bar').style = `width: ${progress}%;`;
}

function resetProgressBar() {
    document.getElementById('progress-bar').innerHTML = `0%`;
    document.getElementById('progress-bar').style = `width: 0%;`;
}