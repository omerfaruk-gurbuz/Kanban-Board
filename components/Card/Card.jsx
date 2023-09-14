import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import "./Card.css";
const Card = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Draggable
      key={props.id.toString()}
      draggableId={props.id.toString()}
      index={props.index}
      type="CARD"
    >
      {(provided) => (
        <>
          <div
            className="custom__card"
            onClick={() => {
              setModalShow(true);
            }}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className="card__text">
              <p>{props.title}</p>
            </div>
            <div className="delete">
            <svg  className="car__more"
              onClick={() => props.removeCard(props.bid)} xmlns="http://www.w3.org/2000/svg" width="18" height="18" color="gray" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </div>
          </div>
        </>
      )}
    </Draggable>
  );
};

export default Card;
