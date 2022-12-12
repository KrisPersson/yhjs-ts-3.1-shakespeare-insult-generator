import { allInsults, Insult } from "./insults.js"

const insultBtn: HTMLButtonElement = document.querySelector('.insult-btn') as HTMLButtonElement
const insultDisplay: HTMLElement = document.querySelector('.insult-display') as HTMLElement
let insultArray: Insult[] = [...allInsults] // Saving the original array to use later for when array is empty.

insultBtn.addEventListener('click', generateInsult)

function generateInsult(): void {
    
    const randomIndex = Math.floor(Math.random() * insultArray.length) // Generate a random index between 0 and the amount of insults still left in the insultArray-array.

    const insult = insultArray[randomIndex].insult // Pick an insult randomly with the previously generated randomIndex.
    const play = insultArray[randomIndex].play

    // Render the random insult to the DOM
    insultDisplay.innerHTML = `     
    <p>"${insult}"</p>
    <p class='insult-display__play-p'>${play}</p>
    `
    insultArray.splice(randomIndex, 1) // Remove rendered insult from the array

    if (insultArray.length === 0) { // if it's empty, restore original array 
        insultArray = [...allInsults]
    } 
}