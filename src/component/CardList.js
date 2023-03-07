import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {

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


/*ErrorBoundary.js Add - If occur Error in
CardList component then page loaded with Sorry text.*/

// - provide error by code:
// const CardList = ({robots}) => {
//     /*  if(true){
//           throw new Error('Noooooo')
//       }*/
//     return (