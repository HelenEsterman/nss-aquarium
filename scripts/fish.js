// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishCard">
            <div class="fish__image"><img src="${fish.image}" /></div>
            <div class="fishInfo">
            <p><strong>${fish.name}</strong></p>
            <p><strong>Species: </strong>${fish.species}</p>
            <p><strong>Length: </strong>${fish.size} inches</p>
            <p><strong>Location Harvested: </strong>${fish.location}</p>
            <p><strong>Diet: </strong>${fish.food}</p>
            </div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}


export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = []
    const fishes = getFish()

    for (const fish of fishes) {
        if (fish.size % 3 === 0) {
            holyFish.push(fish)
        }

    }

    return console.log(holyFish)
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldiers = []
    const fishes = getFish()

    for (const fish of fishes) {
        if (fish.size % 5 === 0) {
            soldiers.push(fish)
        }
    }

    return console.log(soldiers)
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    let regularFish = []
    const fishes = getFish()

    for (const fish of fishes) {
        if(fish.size % 3 != 0 && fish.size % 5 != 0){
            regularFish.push(fish)
        }
    }
    return console.log(regularFish)
}

const fishes = getFish()

mostHolyFish(fishes)
soldierFish(fishes)
nonHolyFish(fishes)