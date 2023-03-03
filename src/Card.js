import React from "react";

// id props are not linked correctluy inside of image src hhtp

const Card = (props) => {
    const {id, name, email} = props;
    return(
        <div className='tc bg-light-green  dib br3 pa3 ma2 grow bw2 shadow-5 '>
            <img alt='photoRoboFriends' src={"https://robohash.org/${id}?200x200"} />
            <div>
                <p>{name}</p>
                <h2>{email}</h2>
            </div>
        </div>
    );
}

export default Card;