import react,{useState } from "react"
import { Header } from "./Header1";
import "./App.css"
import { List } from "./list"
import { Image } from "./Image";


function App() {

   const [Cricketer,updatedCricketers]=useState([{cricketurl:"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTxtdTAGf3obR31GaqP0LrXhTittDPioE0Vd4YKrvpiYh_GOSAKgtgybCle6jBSry-T56yloU16PxwPsPY",cricketname:"virat kholi"},{cricketurl:"https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg",cricketname:"virat kholi"}])

  return(
 
    <>

    <Header/>
    <List/>
     {Cricketer.map((item,i) =>{
       return <Image Link={item.cricketurl} Name={item.cricketname}/>

     })}
  
    </>

  )

}

export default App;
