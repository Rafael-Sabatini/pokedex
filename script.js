async function fetchData () {

    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        if(pokemonName.value = ''){
            throw new Error("Value cannot be blank");
        }
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error(`Could not fetch resource status: ${response.status}`)
        }

        const data = await response.json()
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    } catch (error) {
        console.error(error);
    }

}