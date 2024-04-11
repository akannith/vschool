export default function Card(props) {
    console.log (props)
   return (
     <div className="container">
                  
        <h3 className="place">{props.place}</h3>
        <h3 className="Price">{props.price}</h3>
        <h3 className="timeToGo">{props.timeToGo}</h3>
                   
     </div>
    )
 }
    
