import InfoComponent from "./components/InfoComponent.js"
import PokemonComponent from "./components/PokemonComponent.js"
import "./styles/styles.css"

document.querySelector("#root").innerHTML = `
  <div id="wrapper">
    <ul id="header">
      <li><a class="header-link" id="link-info" href="#">Информация</a></li>
      <li><a class="header-link" id="link-pokemon" href="#">Рандомный покемон</a></li>
    </ul>
    <div id="content"></div>
  </div>
`

const contentElement = document.querySelector("#content")

const renderInfo = () => {
  const info = new InfoComponent()
  contentElement.innerHTML = info.render()
}

const renderPokemon = async () => {
  const pokemon = new PokemonComponent(Math.floor(Math.random() * 100))
  contentElement.innerHTML = await pokemon.render()
}

document.querySelectorAll(".header-link").forEach((el) => [
  el.addEventListener("click", (event) => {
    if (event.target.id === "link-info") {
      renderInfo()
    }
    if (event.target.id === "link-pokemon") {
      renderPokemon()
    }
  }),
])

renderInfo()
