import { useState } from 'react'
import Card from "./card.jsx"

export default function App() {
    let vacationSpots = [
      {
        place: "Meridian, Idaho",
        price: 40,
        timeToGo: "Spring"
      },{
        place: "Cancun",
        price: 900,
        timeToGo: "Winter"
      },{
        place: "China",    price: 1200,
        timeToGo: "Fall"
      },{
        place: "Russia",
        price: 1100,
        timeToGo: "Summer"
      },{
        place: "Lebanon",
        price: 400,
        timeToGo: "Spring"
      }
    ]
      let mappedVacationSpots= vacationSpots.map(item => {
         return(
         <Card
         place = {item.place}
         price = {item.price}
         timeToGo ={item.timeToGo}
         />
         )
})
return(
    <div className='cardsContainer'>
        {mappedVacationSpots}
    </div>
)
}
// function (props){

//   