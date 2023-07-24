import { getTankTips } from "./database.js"

export const tankTipsList = () => {
    // Invoke the function that you imported from the database module
    const tankTips = getTankTips()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="tipsList"><h2 id="tipsHeader">Tank & Water Maintenance Tips</h2><p>These tips explain the process of keeping the tank clean and water the right salinity and temperature.</p><ol>'

    // Create HTNL representations of each fish here
    for (const tips of tankTips) {

        // Why is there a backtick used for this string?
        htmlString += `
            <li><strong>${tips.tip}</strong></li>
            <p>${tips.description}</p>
`
    }
    htmlString += `</ol></article>`

    return htmlString
}