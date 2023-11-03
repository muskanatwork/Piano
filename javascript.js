const pianoKeys = document.querySelectorAll(".piano-keys .key")
const volume = document.querySelector(".volume-slider input")
const keysCheckbox = document.querySelector(".keys-checkbox input")

console.log(volume)

let audio = new Audio()
const play = (key) => {
    audio.src = `tunes/${key}.wav`
    audio.play()
}
pianoKeys.forEach(key => {
    key.addEventListener("click", () => play(key.dataset.key));
})
const volumeSlider = (e) => {
    audio.volume = e.target.value
}
volume.addEventListener("input", volumeSlider)


