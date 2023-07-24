import { getFish } from './database.js'
import { getTankTips } from './database.js'
import { getLocations } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

// Import the FishList function from the correct module
import {FishList} from './fish.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector("#container")

parentHTMLElement.innerHTML = FishList()


const allTankTips = getTankTips()

for (const tips of allTankTips) {
    console.log(tips)
}

import {tankTipsList} from './tips.js'

/*
    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement2 = document.querySelector(".tips")


parentHTMLElement2.innerHTML = tankTipsList()


const allLocations = getLocations()

for (const location of allLocations) {
    console.log(location)
}

import {locationsList} from './locations.js'

/*
    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement3 = document.querySelector("#container3")


parentHTMLElement3.innerHTML = locationsList()