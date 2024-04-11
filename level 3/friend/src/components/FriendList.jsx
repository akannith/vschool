import React from "react";
import Friend from "./Friend.jsx"

export default function FriendList() {
    const friends = [
        {
          name: "Ben",
          age: 29,
          pets: [
            {
              name: "spot",
              breed: "tabby"
            },{
              name: "John Johnson",
              breed: "husky"
            },{
              name: "Bear the bear",
              breed: "Grizzly"
            }
          ]
        },{
          name: "Bob",
          age: 31,
          pets: [
            {
              name: "Sally",
              breed: "Australian Shepard"
            }
          ]
        },{
          name: "Marcus",
          age: 25,
          pets: [
            {
              name: "Indy",
              breed: "Akita"
            },{
              name: "Anna",
              breed: "persian cat"
            }
          ]
        },{
          name: "Jacob",
          age: 20,
          pets: [
            {
              name: "fluffy",
              breed: "sphynx cat"
            },{
              name: "patches",
              breed: "sphynx cat"
            },{
              name: "tiger",
              breed: "sphynx cat"
            },{
              name: "oscar",
              breed: "sphynx cat"
            }
          ]
        }
      ]
      const mappedFriendArr = friends.map((item, index)  => {
        return(
            <Friend
             key = {index}
             name =  {item.name}
             age ={item.age}
             pets ={item.pets}
                
            />
        )
    })
    return(
        <div>
            <h1 className="title">Friend List</h1>
            <div className="Container">{mappedFriendArr}</div>
        </div>
    )      
}
