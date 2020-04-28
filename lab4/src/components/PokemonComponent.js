export default class PokemonComponent {
  constructor(number) {
    this.number = number
  }
  async pokemonData() {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${this.number}`
    )
    let data = await response.json()
    console.log(data)
    return data
  }

  async render() {
    const data = await this.pokemonData()
    return `<div id="pokemon-container">
        <div id="img-contaier">
          <img src=${data.sprites.front_default} />
        </div>
        <h2 id="pokemon-name">${data.name.toUpperCase()}</h1>
        <h4 id="pokemon-name">${data.abilities
          .map((elem) => {
            return elem.ability.name
          })
          .join(", ")}
        </h4>
      </div>`
  }
}
