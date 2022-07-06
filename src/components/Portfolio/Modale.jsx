import React from "react";
import PropTypes from "prop-types";

// ----- Components -----

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

// ----- Package dependencies -----
import { Animated } from "react-animated-css";
// import { useTranslation } from "react-i18next";

// ----- Datas -----
import works from "../../../data/works.js";

const Modale = ({ open, handleClose }) => {
  // ----- destructuring to use the translation package i18 -----
  // const { t } = useTranslation();

  // ----- Function : modal styling -----
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid",
    boxShadow: 24,
    p: 2,
  };
  return (
    <div className="">
      {/* ----- CARD CONTAINER ----- */}
      {works &&
        works.map(
          ({
            id,
            modalTitle,
            subTitle,
            modalLearnings1,
            modalLearnings2,
            modalLearnings3,
            modalLearnings4,
            modalLearnings5,
            codingTime,
            challenge1,
            challenge2,
            challenge3,
            challenge4,
            difficulty,
            backend,
          }) => (
            <Modal
              key={id}
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className="bp1:z-50"
            >
              <Box sx={style} className="rounded-lg bg-slate-900">
                <Animated
                  animationIn="fadeInDown"
                  animationOut="fadeInDown"
                  // animationInDelay={500}
                  isVisible
                >
                  <h1
                    id="modal-modal-title"
                    variant="h1"
                    component="h5"
                    className="bp1:px-24 text-center mb-3 text-3xl"
                  >
                    {modalTitle}
                  </h1>
                </Animated>

                <Animated
                  animationIn="fadeInDown"
                  animationOut="fadeInDown"
                  animationInDelay={500}
                  isVisible
                >
                  <h3
                    id="modal-modal-title"
                    variant="h4"
                    component="h2"
                    className="bp1:px-24 text-center"
                  >
                    {subTitle}
                  </h3>
                </Animated>

                <Animated
                  animationIn="fadeInDown"
                  animationOut="fadeInDown"
                  animationInDelay={1000}
                  isVisible
                >
                  <p
                    id="modal-modal-title"
                    variant="h4"
                    component="h2"
                    className="bp1:px-24 mb-2 mt-4 text-amber-600 text-center"
                  >
                    Les Enseignements
                  </p>
                  <ol className="ml-2 text-center">
                    <li>{modalLearnings1}</li>
                    <li>{modalLearnings2}</li>
                    <li>{modalLearnings3}</li>
                    <li>{modalLearnings4}</li>
                    <li>{modalLearnings5}</li>
                  </ol>
                </Animated>

                <Animated
                  animationIn="fadeInDown"
                  animationOut="fadeInDown"
                  animationInDelay={1500}
                  isVisible
                >
                  <p
                    id="modal-modal-title"
                    variant="h4"
                    component="h2"
                    className="bp1:px-24 mb-2 mt-4 text-amber-600 text-center"
                  >
                    Mes challenges
                  </p>
                  <ol className="ml-2 text-center">
                    <li>{challenge1}</li>
                    <li>{challenge2}</li>
                    <li>{challenge3}</li>
                    <li>{challenge4}</li>
                  </ol>
                </Animated>

                <Animated
                  animationIn="fadeInDown"
                  animationOut="fadeInDown"
                  animationInDelay={2000}
                  isVisible
                >
                  <p
                    id="modal-modal-title"
                    variant="h4"
                    component="h2"
                    className="bp1:px-24 mb-2 mt-4 text-amber-600 text-center"
                  >
                    Projet réalisé en
                  </p>
                  <p
                    id="modal-modal-title"
                    variant="h4"
                    component="h2"
                    className="bp1:px-24 text-center"
                  >
                    {codingTime}
                  </p>
                </Animated>

                <Animated
                  animationIn="fadeInDown"
                  animationOut="fadeInDown"
                  animationInDelay={2500}
                  isVisible
                >
                  <p
                    id="modal-modal-title"
                    variant="h4"
                    component="h2"
                    className="bp1:px-24 mb-2 mt-4 text-amber-600 text-center"
                  >
                    Niveau de difficulté
                  </p>
                  <p
                    id="modal-modal-title"
                    variant="h4"
                    component="h2"
                    className="bp1:px-24 text-center"
                  >
                    {difficulty}
                  </p>
                </Animated>

                <Animated
                  animationIn="fadeInDown"
                  animationOut="fadeInDown"
                  animationInDelay={2500}
                  isVisible
                >
                  <p
                    id="modal-modal-title"
                    variant="h4"
                    component="h2"
                    className="bp1:px-24 mb-2 mt-4 text-amber-600 text-center"
                  >
                    Backend : {backend}
                  </p>
                </Animated>
              </Box>
            </Modal>
          )
        )}
    </div>
  );
};

Modale.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
};

Modale.defaultProps = {
  open: false,
};
export default Modale;
