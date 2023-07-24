import { getLocations } from "./database.js"

export const locationsList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocations()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="locationsList"> <h2>List of Cool Areas Martin Has Harvested Fish From</h2>'

    // Create HTNL representations of each fish here
    for (const location of locations) {

        // Why is there a backtick used for this string?
        htmlString += `
        <section>
                <ul>
                    <li>${location.city}, ${location.country}</li>
                </ul>
            </section>
`
    }
    htmlString += `</article>`

    return htmlString
}