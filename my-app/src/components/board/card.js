import React, { useState } from "react";
import './boardList.css';

const tempColors = { "Bug Fix": 1, "UI Dev": 2, Testing: 3 };

export default function TrelloCard({ id, status, title, label }) {
  const [onHold, setOnHold] = useState(false);

  const dragStartHandler = (e) => {
    e.dataTransfer.setData("cardInfo", JSON.stringify({ id, status }));
    e.target.className += " ohhold";
    setTimeout(() => {
      setOnHold(true);
    }, 0);
  };
  const dragEndHandler = () => {
    setOnHold(false);
  };
  const onDragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className === "card") {
      setTimeout(() => {
        e.target.className = "card anotherCardOnTop";
      }, 0);
    }
  };
  const onDragLeaveHandler = (e) => {
    resetClassName(e);
  };
  const onDropHandler = (e) => {
    resetClassName(e);
    /**  
     TODO: Remove all anotherCardOnTop classnames 
     from DOM after drop complete.
    */
  };

  const resetClassName = (e) => {
    e.preventDefault();
    let isCard =
      e.target.className === "card" ||
      e.target.className === "card anotherCardOnTop";
    if (isCard) {
      setTimeout(() => {
        e.target.className = "card";
      }, 0);
    }
  };

  return (
    <div
      id={id}
      className={`card ${onHold ? "hidden" : ""}`}
      draggable="true"
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
      onDragOver={onDragOverHandler}
      onDragLeave={onDragLeaveHandler}
      onDrop={onDropHandler}
    >
      <div className="cardTitle">{title}</div>
      <div className="cardFooter">
        {label ? (
          <div className={`label color${tempColors[label]}`}>{label}</div>
        ) : (
          <div></div>
        )}

        <div className="collab">
          <a href="" className="collabPerson">
            <i className="fas fa-user"></i>
          </a>
          <a href="" className="collabPerson">
            <i className="fas fa-user"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
