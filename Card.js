import React from "react";
import styles from "./Card.css";

console.log("styles");
console.log(styles);

//custom displays for the cards
const Card = ({ cardType, cardState, onClick, styles }) => {
  if(cardState === "INVISIBLE"){
    return (
      <div className="card card_back" onClick={onClick}>
      {/* <div>{cardType}</div>
      <div className="cardState">{cardState}</div> */}
    </div>
    );
  }
  else if(cardState === "VISIBLE" || cardState === "FAILED"){
    if(cardType === "01"){
      return (
        <div className="card card_01" onClick={onClick}>
        {/* <div>{cardType}</div>
        <div className="cardState">{cardState}</div> */}
      </div>
      );
    }
    if(cardType === "02"){
      return (
        <div className="card card_02" onClick={onClick}>
        {/* <div>{cardType}</div>
        <div className="cardState">{cardState}</div> */}
      </div>
      );
    }
    if(cardType === "03"){
      return (
        <div className="card card_03" onClick={onClick}>
        {/* <div>{cardType}</div>
        <div className="cardState">{cardState}</div> */}
      </div>
      );
    }
    if(cardType === "04"){
      return (
        <div className="card card_04" onClick={onClick}>
        {/* <div>{cardType}</div>
        <div className="cardState">{cardState}</div> */}
      </div>
      );
    }
    if(cardType === "05"){
      return (
        <div className="card card_05" onClick={onClick}>
        {/* <div>{cardType}</div>
        <div className="cardState">{cardState}</div> */}
      </div>
      );
    }
    if(cardType === "06"){
      return (
        <div className="card card_06" onClick={onClick}>
        {/* <div>{cardType}</div>
        <div className="cardState">{cardState}</div> */}
      </div>
      );
    }
    if(cardType === "07"){
      return (
        <div className="card card_07" onClick={onClick}>
        {/* <div>{cardType}</div>
        <div className="cardState">{cardState}</div> */}
      </div>
      );
    }
    if(cardType === "08"){
      return (
        <div className="card card_08" onClick={onClick}>
        {/* <div>{cardType}</div>
        <div className="cardState">{cardState}</div> */}
      </div>
      );
    }
    if(cardType === "09"){
      return (
        <div className="card card_09" onClick={onClick}>
        {/* <div>{cardType}</div>
        <div className="cardState">{cardState}</div> */}
      </div>
      );
    }
    if(cardType === "10"){
      return (
        <div className="card card_10" onClick={onClick}>
        {/* <div>{cardType}</div>
        <div className="cardState">{cardState}</div> */}
      </div>
      );
    }
  }
  else{
    if(cardType === "01"){
      return (
        <div className="card card_01 card_glow" onClick={onClick}>
        {/* <div>{cardType}</div>
        <div className="cardState">{cardState}</div> */}
      </div>
      );
    }
    if(cardType === "02"){
      return (
        <div className="card card_02 card_glow" onClick={onClick}>
        {/* <div>{cardType}</div>
        <div className="cardState">{cardState}</div> */}
      </div>
      );
    }
    if(cardType === "03"){
      return (
        <div className="card card_03 card_glow" onClick={onClick}>
        {/* <div>{cardType}</div>
        <div className="cardState">{cardState}</div> */}
      </div>
      );
    }
    if(cardType === "04"){
      return (
        <div className="card card_04 card_glow" onClick={onClick}>
        {/* <div>{cardType}</div>
        <div className="cardState">{cardState}</div> */}
      </div>
      );
    }
    if(cardType === "05"){
      return (
        <div className="card card_05 card_glow" onClick={onClick}>
        {/* <div>{cardType}</div>
        <div className="cardState">{cardState}</div> */}
      </div>
      );
    }
    if(cardType === "06"){
      return (
        <div className="card card_06 card_glow" onClick={onClick}>
        {/* <div>{cardType}</div>
        <div className="cardState">{cardState}</div> */}
      </div>
      );
    }
    if(cardType === "07"){
      return (
        <div className="card card_07 card_glow" onClick={onClick}>
        {/* <div>{cardType}</div>
        <div className="cardState">{cardState}</div> */}
      </div>
      );
    }
    if(cardType === "08"){
      return (
        <div className="card card_08 card_glow" onClick={onClick}>
        {/* <div>{cardType}</div>
        <div className="cardState">{cardState}</div> */}
      </div>
      );
    }
    if(cardType === "09"){
      return (
        <div className="card card_09 card_glow" onClick={onClick}>
        {/* <div>{cardType}</div>
        <div className="cardState">{cardState}</div> */}
      </div>
      );
    }
    if(cardType === "10"){
      return (
        <div className="card card_glow" onClick={onClick}>
        {/* <div>{cardType}</div>
        <div className="cardState">{cardState}</div> */}
      </div>
      );
    }
  }
}; 

export default Card;
