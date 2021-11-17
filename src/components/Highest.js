const Highest = ({ data, n, m }) => {

    let result1 = 0
    let result = 0
    let k = 0
    const t = []
    let total = 0

    //Jos tietoja ei ole syötetty lomakkeeseen, palautetaan 0.

    if (data.length === 0) {

        return (
            <p>{data.length}</p>

        )
    }

    // Mikäli syötettyjen päivämäärien välillä on yli 90 päivää, tai jos ensimmäinen päivämäärä on ennen 24.5.2018, CoinGecko palauttaa päiväkohtaisen datan.
    //Etsitään suurin arvo.   

    if (m - n > 7776000 || n < 1527109200) {
        result1 = data.total_volumes[0][1]

        for (let i = 1; i < data.total_volumes.length; i++) {

            if (result1 < data.total_volumes[i][1]) {
                result1 = data.total_volumes[i][1]
                k = i
            }
        }
        result = data.total_volumes[k][0]
        var s = new Date(result).toLocaleDateString("fi-FI")


        return (

            <p>Highest trading volume was on {s} and it was {data.total_volumes[k][1]} €</p>
        )
    }

    // Muussa tapauksessa tieto tulee jokaiselta tunnilta, jolloin lasketaan yhteen kaikki tunnit kyseiseltä päivältä.
    //Jonka jälkeen etsitään yhteenlasketuista summista suurin.

    else {
        for (let i = 0; i < data.total_volumes.length; i = i + 24) {
            for (let k = 0; k < 24; k++) {
                total = total + data.total_volumes[k][1]
            }
            t.push(total)
        }

        let biggest = t.indexOf(Math.max(...t))
        biggest = biggest * 24

        result = data.total_volumes[biggest][0]
        let g = new Date(result).toLocaleDateString("fi-FI")


        return (

            <p> Highest trading volume was on {g} and it was {Math.max(...t)} €</p>
        )


    }
}
export default Highest