
/*backgroundcolor for card in single cardview when selected*/
function setBackgroundcolorCardStats(type) {
    if (type == 'grass' || type == 'bug') {
        document.getElementById('statsPokemon').style = 'background-color: rgb(0, 127, 0, 0.85);';
    }
    if (type == 'fire') {
        document.getElementById('statsPokemon').style = 'background-color: rgb(255, 165, 0, 0.85);';
    }
    if (type == 'water') {
        document.getElementById('statsPokemon').style = 'background-color: rgb(0,0,255, 0.85);';
    }
    if (type == 'normal') {
        document.getElementById('statsPokemon').style = 'background-color: rgb(190,190,190, 0.85);';
    }
    if (type == 'poison') {
        document.getElementById('statsPokemon').style = 'background-color: rgb(160,32,240, 0.85);';
    }
    if (type == 'electric') {
        document.getElementById('statsPokemon').style = 'background-color: rgb(151, 153, 35, 0.85);';
    }
    if (type == 'ground') {
        document.getElementById('statsPokemon').style = 'background-color: rgb(165,42,42, 0.85);';
    }
    if (type == 'fairy') {
        document.getElementById('statsPokemon').style = 'background-color: rgb(255,192,203, 0.85);';
    }
    if (type == 'fighting') {
        document.getElementById('statsPokemon').style = 'background-color: rgb(255,0,0, 0.85);';
    }
    if (type == 'psychic') {
        document.getElementById('statsPokemon').style = 'background-color: rgb(165, 132, 0, 0.85);';
    }
    if (type == 'rock') {
        document.getElementById('statsPokemon').style = 'background-color: rgb(94, 78, 14, 0.85);';
    }
    if (type == 'ghost') {
        document.getElementById('statsPokemon').style = 'background-color: rgb(94, 8, 94, 0.85);';
    }
    if (type == 'ice') {
        document.getElementById('statsPokemon').style = 'background-color: rgb(0, 183, 255, 0.85);';
    }
    if (type == 'dragon') {
        document.getElementById('statsPokemon').style = 'background-color: rgb(255, 72, 0, 0.85);';
    }
}

/*backgroundcolor for <span> with types in single cardview*/
function setBackgroundcolorCardTypeSpanCard(type, i){
    if (type == 'grass' || type == 'bug') {
        document.getElementById(`typeSpanCard${i}`).style = 'background-color: rgb(0, 127, 0) !important; margin-bottom: 4px;;';
    }
    if (type == 'fire') {
        document.getElementById(`typeSpanCard${i}`).style = 'background-color: rgb(255, 165, 0) !important; margin-bottom: 4px;';
    }
    if (type == 'water') {
        document.getElementById(`typeSpanCard${i}`).style = 'background-color: rgb(0,0,255) !important; margin-bottom: 4px;';
    }
    if (type == 'normal') {
        document.getElementById(`typeSpanCard${i}`).style = 'background-color: rgb(190,190,190) !important; margin-bottom: 4px;';
    }
    if (type == 'poison') {
        document.getElementById(`typeSpanCard${i}`).style ='background-color: rgb(160,32,240) !important; margin-bottom: 4px;';
    }
    if (type == 'electric') {
        document.getElementById(`typeSpanCard${i}`).style ='background-color: rgb(151, 153, 35) !important; margin-bottom: 4px;';
    }
    if (type == 'ground') {
        document.getElementById(`typeSpanCard${i}`).style = 'background-color: rgb(165,42,42) !important; margin-bottom: 4px;';
    }
    if (type == 'fairy') {
        document.getElementById(`typeSpanCard${i}`).style = 'background-color: rgb(255,192,203) !important; margin-bottom: 4px;';
    }
    if (type == 'fighting') {
        document.getElementById(`typeSpanCard${i}`).style = 'background-color: rgb(255,0,0) !important; margin-bottom: 4px;';
    }
    if (type == 'psychic') {
        document.getElementById(`typeSpanCard${i}`).style = 'background-color: rgb(165, 132, 0) !important; margin-bottom: 4px;';
    }
    if (type == 'rock') {
        document.getElementById(`typeSpanCard${i}`).style ='background-color: rgb(94, 78, 14) !important; margin-bottom: 4px;';
    }
    if (type == 'ghost') {
        document.getElementById(`typeSpanCard${i}`).style ='background-color: rgb(94, 8, 94) !important; margin-bottom: 4px;';
    }
    if (type == 'ice') {
        document.getElementById(`typeSpanCard${i}`).style = 'background-color: rgb(0, 183, 255) !important; margin-bottom: 4px;';
    }
    if (type == 'dragon') {
        document.getElementById(`typeSpanCard${i}`).style = 'background-color: rgb(255, 72, 0) !important; margin-bottom: 4px;';
    }
    if(type == 'flying'){
        document.getElementById(`typeSpanCard${i}`).style = 'background-color: rgb(33, 159, 201) !important; margin-bottom: 4px;';
    }
}


/*backgroundcolor for cards in cardoverview with all pokemon*/
function setBackgroundcolorCard(type, number) {
    if (type == 'grass' || type == 'bug') {
        document.getElementById(`pokemonCard${number}`).style = 'background-color: green;';
    }
    if (type == 'fire') {
        document.getElementById(`pokemonCard${number}`).style = 'background-color: orange;';
    }
    if (type == 'water') {
        document.getElementById(`pokemonCard${number}`).style = 'background-color: blue;';
    }
    if (type == 'normal') {
        document.getElementById(`pokemonCard${number}`).style = 'background-color: grey;';
    }
    if (type == 'poison') {
        document.getElementById(`pokemonCard${number}`).style = 'background-color: purple;';
    }
    if (type == 'electric') {
        document.getElementById(`pokemonCard${number}`).style = 'background-color: rgb(151, 153, 35);';
    }
    if (type == 'ground') {
        document.getElementById(`pokemonCard${number}`).style = 'background-color: brown;';
    }
    if (type == 'fairy') {
        document.getElementById(`pokemonCard${number}`).style = 'background-color: pink;';
    }
    if (type == 'fighting') {
        document.getElementById(`pokemonCard${number}`).style = 'background-color: red;';
    }
    if (type == 'psychic') {
        document.getElementById(`pokemonCard${number}`).style = 'background-color: rgb(165, 132, 0);';
    }
    if (type == 'rock') {
        document.getElementById(`pokemonCard${number}`).style = 'background-color: rgb(94, 78, 14);';
    }
    if (type == 'ghost') {
        document.getElementById(`pokemonCard${number}`).style = 'background-color: rgb(94, 8, 94);';
    }
    if (type == 'ice') {
        document.getElementById(`pokemonCard${number}`).style = 'background-color: rgb(0, 183, 255);';
    }
    if (type == 'dragon') {
        document.getElementById(`pokemonCard${number}`).style = 'background-color: rgb(255, 72, 0);';
    }
}