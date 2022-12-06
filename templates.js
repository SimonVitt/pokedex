

/*Template overview of all pokemons*/
function pokemonCardTemplateOverview(pokemonName, number) {
    return /*html*/`
        <div class="pokemonCard" id="pokemonCard${number}" Event stopPropagation() onclick="showStats(${number})">
            <img class="pokemonImage" id="pokemonImage${number}" src="">
            <div>
                <h2>${pokemonName}</h2>
                <div id="pokemonTypes${number}" class="pokemonTypes"></div>
                <span class="numberPokemon">#${number}<span>
            </div>
        </div>
    `;
}

/*Template view on one single card, when selected*/
function pokemonCardTemplate(pokemonName, number) {
    return /*html*/`
    <div class="statsPokemon" id="statsPokemon" onclick="dontClose(event)">
        <div>
            <h3>${pokemonName}</h3>
            <img class="imgCard" id="imgCard">
        </div>
        <div class="pokemonDetailsStats">
            <div class="generalStats">
                <h3>About</h3>
                <div id="types" class="types valueStat">
                    <div><span style="height: max-content;">Type:</span></div>
                    <div id="divTypes" class="divTypes valueStat"></div>
                </div>
                <div>
                    <span>Height</span>
                    <span id="heightDiv" class="valueStat"></span>
                </div>
                <div>
                    <span>Weight</span>
                    <span id="weightDiv" class="valueStat"></span>
                </div>
            </div>
            <div class="baseStats" id="baseStats">
                <h3>Base Stats</h3>
            </div>
        </div>
        <span id="closeBtn" class="close" onclick="closeStats()">&#10006</span>
        <span id="idNumber" class="idNumber">#${number}</span>
        <img src="img/arrow-89-32.png" onclick="lastPokemon(${number})" class="lastPokemon">
        <img src="img/arrow-25-32.png" onclick="nextPokemon(${number})" class="nextPokemon">
    </div>    
    `;
}

/*template for types displayed in single cardview*/
function pokemonTypesTemplate(type, i) {
    return /*html*/`
        <span id="typeSpanCard${i}" class="typeSpanCard">${type}</span>
    `;
}

/*template for basestats displayed in single cardview*/
function pokemonStatsTemplate(name, number){
    return /*html*/`
        <div>
            <span>${name}</span>
            <span class="valueStat">${number}</span>
        </div>
    `;
}