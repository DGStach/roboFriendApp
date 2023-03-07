import React from "react";
import Card from "./Card";


const CardList = ({robots}) => {
  /*  if(true){
        throw new Error('Noooooo')
    }*/
    return (
        <div>
            {
                robots.map((user, id) => {
                    return (
                        <Card
                            key={id}
                            id={robots[id].id}
                            name={robots[id].name}
                            email={robots[id].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;

// If you would you like check Error Boundary - if it's work
// - provide error by code:
// const CardList = ({robots}) => {
//     /*  if(true){
//           throw new Error('Noooooo')
//       }*/
//     return (