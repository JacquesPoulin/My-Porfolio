import React from "react";
import PropTypes from "prop-types";

// ----- Components -----
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const Modale = ({ open, handleClose }) => {
  // ----- Function : modal styling -----
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-lg">
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            className="bp1:px-4"
          >
            Merci pour le temps accordé à l&apos;étude de mon Portfolio !
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="h8"
            component="h2"
            className="pt-5 bp1:px-4"
          >
            Je vous invite à visiter les demos et le code source des projets
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            classname="flex"
          >
            <a href="mailto: jacques.poulin64@gmail.com" className="bp1:px-4">
              jacques.poulin64@gmail.com
            </a>
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            classname="flex"
          >
            <a href="tel:+336-79-17-71-58" className="bp1:px-4">
              (+33) 6 79 17 71 58
            </a>
          </Typography>
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
