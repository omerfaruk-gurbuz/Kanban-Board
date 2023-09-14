import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Board.css";
import Editable from "../Edittable/Edittable";
import Dropdown from "../Dropdown/Dropdown";
import { Droppable } from "react-beautiful-dnd";


export default function Board(props) {

  const [show, setShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      if (e.code === "Enter") setShow(false);
    });
    return () => {
      document.removeEventListener("keypress", (e) => {
        if (e.code === "Enter") setShow(false);
      });
    };
  });

  return (
    <div className="board">
      <div className="board__top">
        {show ? (
          <div>
            <input
              className="title__input"
              type={"text"}
              defaultValue={props.name}
              onChange={(e) => {
                props.setName(e.target.value, props.id);
              }}
            />
          </div>
        ) : (
          <div>
            <p
              onClick={() => {
                setShow(true);
              }}
              className="board__title"
            >
              {props?.name || "Name of Board"}
              <span className="total__cards">{props.card?.length}</span>
            </p>
          </div>
        )}
        <div>       
           <svg onClick={() => props.removeBoard(props.id)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-octagon"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        </div>


      </div>
      <Droppable droppableId={props.id.toString()}>
        {(provided) => (
          <div
            className="board__cards"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {props.card?.map((items, index) => (
              <Card
                bid={props.id}
                id={items.id}
                index={index}
                key={items.id}
                title={items.title}
                tags={items.tags}
                updateCard={props.updateCard}
                removeCard={props.removeCard}
                card={items}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className="board__footer">
        <Editable
          name={"Add Card"}
          btnName={"Add Card"}
          placeholder={"Enter Card Title"}
          onSubmit={(value) => props.addCard(value, props.id)}
        />
      </div>
    </div>
  );
}
