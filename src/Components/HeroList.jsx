import React from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import "./HeroList.css";
import { Modal } from "./Modal/Modal.jsx";
import NotFound from "./NotFound.jsx";

export const HeroList = ({ data }) => {
  const [modal, setModal] = React.useState({ show: false, data: {}, heroId: "" });
  let navigate = useNavigate();
  return (
    <>
      {data ? (
        data.map((hero) => {
          return (
            <div
              className="hero-card"
              key={hero.id}
              onClick={() => setModal({ show: true, data: {}, heroId: hero.id })}
            >
              <img
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt="hero picture"
              />
              <div className="title">
                <h2>{hero.name}</h2>
              </div>
            </div>
          );
        })
      ) : (
        <NotFound />
      )}
      {modal.show &&
        createPortal(
          <Modal onClose={() => setModal({ show: false, data: {} })} body={modal.data} heroId={modal.heroId}/>,
          document.body,
        )}
    </>
  );
};

export default HeroList;
