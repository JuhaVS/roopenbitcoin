const Bearish = ({ data, m, n }) => {


    let result = 0
    let compare = 0

    //Jos tietoja ei ole syötetty lomakkeeseen, palautetaan 0.

    if (data.length === 0) {

        return (
            <p>{data.length}</p>

        )
    }

    // Mikäli syötettyjen päivämäärien välillä on yli 90 päivää tai jos ensimmäinen päivämäärä on ennen 24.5.2018 palauttaa CoinGecko päiväkohtaisen datan  
    //Tässä lasketaan kuinka monta päivää bitcoinin arvo on mennyt alaspäin.

    if (m - n > 7776000 || n < 1527109200) {

        let first = data.prices[0][1]

        for (let i = 1; i < data.prices.length; i++) {

            if (data.prices[i][1] < first) {
                first = data.prices[i][1]
                compare++
            }
            else {
                first = data.prices[i][1]
                if (compare > result) {
                    result = compare 
                    compare = 0
                }
                else { compare = 0 }
            }
            if (compare > result) {
                result = compare 
            }

        }

        if (result > 0 ){
            result = result + 1
        }

        return (

            <p> {result}</p>

        )

    }

    // Muuten tiedot tulevat jokaiselta tunnilta, jolloin tiedot verrataan päivän ensimmäisen tunnin tietojen perusteella.
    //Koska tietoja tulee jokaiselta tunnilta, niin hypätään aina 24 tuntia eteenpäin, jotta saadaan seuraavan päivän arvo.

    else {

        let first = data.prices[0][1]

        for (let i = 24; i < data.prices.length; i = i + 24) {
            if (data.prices[i][1] < first) {
                first = data.prices[i][1]
                compare++
            }
            else {
                first = data.prices[i][1]
                if (compare > result) {
                    result = compare
                    compare = 0
                }
                else { compare = 0 }
            }
            if (compare > result) {
                result = compare
            }

        }

        if (result > 0 ){
            result = result + 1
        }
        return (

            <p> {result}</p>

        )

    }
}

export default Bearish

