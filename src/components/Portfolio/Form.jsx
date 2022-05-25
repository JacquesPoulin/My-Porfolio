import React from "react";
import PropTypes from "prop-types";

// ----- Package -----
import Select from "react-select";

// ----- Datas -----
import technos from "../../../data/stackList";

const Form = ({ selected, setSelected }) => {
  // ----- Function : sort the select input field -----
  const stackSorted = (a, b) => {
    const technoA = a.label.toUpperCase();
    const technoB = b.label.toUpperCase();
    let comparison = 0;
    if (technoA > technoB) {
      comparison = 1;
    } else if (technoA < technoB) {
      comparison = -1;
    }
    return comparison;
  };

  return (
    <form name="Portfolio" className="w-full flex justify-between mb-4">
      <Select
        placeholder={selected}
        options={technos.sort(stackSorted)}
        value={selected}
        onChange={(e) => setSelected(e.value)}
        className="w-60 text-slate-900 rounded-lg box-shadow-1 bg-slate-50 dark:bg-slate-900 dark:bg-opacity-[10%] bg-opacity-[10%] font-exo tracking-wide outline-none bp2:w-[45%] bp3:w-[60%] bp4:w-[90%]"
      />

      <button type="button" onClick={() => setSelected("Toutes")}>
        Voir tout
      </button>
    </form>
  );
};

Form.propTypes = {
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default Form;
