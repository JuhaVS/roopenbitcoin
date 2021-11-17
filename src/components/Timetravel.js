const Timetravel = ({ data }) => {

    let result1 = 0
    let result = 0
    let resultt = 0
    let gap = 0
    let gap2 = 0
    let ostoHinta = 0
    let myyntiHinta = 0

    //Jos tietoja ei ole syötetty lomakkeeseen, palautetaan 0.

    if (data.length === 0) {

        return (
            <p>{data.length}</p>

        )
    }

    //Etsitään päivämäärien sisältä minkä kahden luvun välillä on suurin erotus ilman, että ajassa voi matkusta uudelleen taaksepäin.
    //Roope Ankka ei ikinä laittaisi rahojaan bitcoiniin, koska tykkää rahan kilinästä ja siinä uimisesta, mistä syystä hän ei niitä laita pankkiinkaan.


    else {

        for (let o = 0; o < data.prices.length; o++) {

            result1 = data.prices[o][1]

            for (let i = o; i < data.prices.length; i++) {
                if (data.prices[i][1] > result1) {
                    gap = data.prices[i][1] - result1
                    if (gap > gap2) {
                        gap2 = gap

                        resultt = data.prices[o][0]
                        result = data.prices[i][0]

                        ostoHinta = data.prices[o][1]
                        myyntiHinta = data.prices[i][1]


                    }
                }
            }
        }

        let u = new Date(resultt).toLocaleDateString("fi-FI")
        let s = new Date(result).toLocaleDateString("fi-FI")

        if (ostoHinta < myyntiHinta) {

            return (

                <p> Scrooge should travel to {u} and sell all the bitcoin on {s}  to maximize the profits. </p>

            )
        }
        else {

            return (
                <p>Scrooge shouldn't buy and sell, bad timing. </p>
            )

        }

    }

}
export default Timetravel