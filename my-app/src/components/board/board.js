import React from "react";
import './boardList.css';
import Card from "./card";

export default function Board({ data, title, status, onChange }) {
  // Sort data (Might need useMemo)
  let sorted = data.sort((a, b) => a.order - b.order);

  const onDragEnterHandler = (e) => {
    e.preventDefault();
  };
  const onDragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className === "boardContentArea") {
      setTimeout(() => {
        e.target.className = "boardContentArea hovered";
      }, 0);
    }
  };
  const onDragLeaveHandler = (e) => {
    e.preventDefault();
    if (e.target.className === "boardContentArea hovered") {
      setTimeout(() => {
        e.target.className = "boardContentArea";
      }, 0);
    }
  };
  const onDropHandler = (e) => {
    let cardInfo = JSON.parse(e.dataTransfer.getData("cardInfo"));
    let targetCardId = e.target.id;
    onChange(cardInfo, status, targetCardId);
    if (e.target.className === "boardContentArea hovered") {
      setTimeout(() => {
        e.target.className = "boardContentArea";
      }, 0);
    }
  };

  // returns JSX - Render cards
  const renderCards = () => {
    return sorted.map((item) => (
      <Card
        key={`status-${item.id}`}
        id={item.id}
        status={status}
        title={item.title}
        label={item.label}
      />
    ));
  };

  return (
    <div className="board-col">
      <div className="list">
        <h4 className="list-title">{title}</h4>
        <div
          className="boardContentArea"
          onDragEnter={onDragEnterHandler}
          onDragOver={onDragOverHandler}
          onDragLeave={onDragLeaveHandler}
          onDrop={onDropHandler}
        >
          {renderCards()}
        </div>
        <a className="btn-list">+ Add another card</a>
      </div>
    </div>
  );
}
