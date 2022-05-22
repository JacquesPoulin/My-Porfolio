import React from "react";
import PropTypes from "prop-types";

// ----- Components -----
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

// ----- Package dependencies -----
import { Animated } from "react-animated-css";

const Modale = ({ open, handleClose }) => {
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
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-lg bg-slate-900">
          <Animated
            animationIn="fadeInDown"
            animationOut="fadeInDown"
            isVisible
          >
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h2"
              className="bp1:px-4 text-center"
            >
              Merci pour le temps accordé à l&apos;étude de mon Portfolio !
            </Typography>
          </Animated>
          <Animated
            animationIn="fadeInDown"
            animationOut="fadeInDown"
            animationInDelay={500}
            isVisible
          >
            <Typography
              id="modal-modal-title"
              variant="h8"
              component="h2"
              className="pt-5 bp1:px-4 text-center"
            >
              Je serai ravi de vous rencontrer si vous désirez en savoir plus à
              mon sujet.
            </Typography>
          </Animated>

          <Animated
            animationIn="fadeInDown"
            animationOut="fadeInDown"
            animationInDelay={1000}
            isVisible
          >
            <Typography
              id="modal-modal-title"
              variant="h8"
              component="h2"
              className="pt-5 text-center"
            >
              Je vous invite donc à regarder les DEMOS ainsi que le CODE de mes
              projets
            </Typography>
          </Animated>
          <Animated
            animationIn="fadeInDown"
            animationOut="fadeInDown"
            animationInDelay={1500}
            isVisible
          >
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              className="flex justify-center"
            >
              <a
                href="mailto: jacques.poulin64@gmail.com"
                className="bp1:px-4 "
              >
                jacques.poulin64@gmail.com
              </a>
            </Typography>
          </Animated>
          <Animated
            animationIn="fadeInDown"
            animationOut="fadeInDown"
            animationInDelay={2000}
            isVisible
          >
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              className="flex justify-center"
            >
              <a href="tel:+336-79-17-71-58" className="bp1:px-4">
                (+33) 6 79 17 71 58
              </a>
            </Typography>
          </Animated>
        </Box>
      </Modal>
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