const Bearish= ({data, m, n}) => {


    let result = 0
    let compare = 0

    //Mikäli ei tietoja palautetaan 0

    if(data.length === 0){

        return(
            <p>{data.length}</p>
            
        )
    }

    // Mikäli noudettujen päivämäärien välillä on yli 90 päivää tai jos ensimmäinen päivämäärä on ennen 24.5.2018 palautuu jokaiselta päivältä 1 tieto joka tarkastetaan
    //Lasketaan tieto monenako päivänä arvo on mennyt alaspäin

    if (m - n > 7776000 || n < 1527109200) {  

    let first = data.prices[0][1]

    for(let i = 1; i<data.prices.length;i++){

       if (data.prices[i][1] < first){
           first=data.prices[i][1]
            compare++
            } 
       else {
            first = data.prices[i][1]
            if(compare > result){
            result = compare
            compare = 0}
            else{compare = 0}
       }
       if(compare > result){
        result = compare}

    }
    return(
        
        <p> {result}</p>

    )

}

// Muutoin tieto tulee joka tunnilta jolloin verrataan päivän ensimmäisen tunnin tietoja. 
//Koska tietoa tulee joka tunnilta hypätään aina 24 tuntia eteenpäin, että saadaan seuraavan päivän arvo

        else { 

             let first = data.prices[0][1]

            for(let i = 24; i<data.prices.length;i=i+24){
             if (data.prices[i][1] < first){
                first=data.prices[i][1]
                compare++
            } 
           else {
                first = data.prices[i][1]
                if(compare > result){
                result = compare
                compare = 0}
                else{compare = 0}
                }
            }
    return(
        
          <p> {result}</p>

      )
    
    }  
}

export default Bearish

