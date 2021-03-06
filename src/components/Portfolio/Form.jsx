import React from "react";
import PropTypes from "prop-types";

// ----- Package dependencies -----
import Select from "react-select";
import { useTranslation } from "react-i18next";

// ----- Datas -----
import technos from "../../../data/stackList";

const Form = ({ selected, setSelected }) => {
  // ----- destructuring to use the translation -----
  const { t } = useTranslation();

  // ----- Function : sort the "Select" input field -----
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
        className="w-52 text-slate-900 rounded-lg box-shadow-1 bg-slate-50 dark:bg-slate-900 dark:bg-opacity-[10%] bg-opacity-[10%] font-exo tracking-wide outline-none bp3:w-36 bp1sub:hidden"
      />

      <button
        type="button"
        onClick={() => setSelected(t("tous"))}
        className="font-bold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-amber-600 via-amber-400 to-amber-100
            animate-text z-10 bp1sub:hidden"
      >
        {t("tous_les_projets")}
      </button>
    </form>
  );
};

Form.propTypes = {
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default Form;
