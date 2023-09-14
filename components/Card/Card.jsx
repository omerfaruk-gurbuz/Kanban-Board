import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Calendar, CheckSquare, Clock, MoreHorizontal } from "react-feather";
import Dropdown from "../Dropdown/Dropdown";
import Modal from "../Modal/Modal";
import Tag from "../Tags/Tags";
import "./Card.css";
import CardDetails from "./CardDetails/CardDetails";
const Card = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Draggable
      key={props.id.toString()}
      draggableId={props.id.toString()}
      index={props.index}
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
              <div>
                <svg                 className="car__more"
              onClick={() => props.removeCard(props.bid)} xmlns="http://www.w3.org/2000/svg" width="18" height="18" color="orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
              </div>
            </div>

            {/* <div className="card__tags">
              {props.tags?.map((item, index) => (
                <Tag key={index} tagName={item.tagName} color={item.color} />
              ))}
            </div> */}

            {/* <div className="card__footer"> */}
              {/* <div className="time">
                <Clock />
                <span>Sun 12:30</span>
              </div> */}
              {/* {props.card.task.length !== 0 && ( */}
                {/* // <div className="task"> */}
                  {/* <CheckSquare /> */}
                  {/* <span>
                    {props.card.task.length !== 0
                      ? `${
                          (props.card.task?.filter(
                            (item) => item.completed === true
                          )).length
                        } / ${props.card.task.length}`
                      : `${"0/0"}`}
                  </span> */}
                {/* </div> */}
              {/* )} */}
            {/* </div> */}

            {/* {provided.placeholder} */}
          </div>
        </>
      )}
    </Draggable>
  );
};

export default Card;
