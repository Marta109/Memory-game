import { useState } from "react";
import "./game-select-section.css";
const SelectSection = ({ options, onSelect }) => {
  if (!options) {
    options = {
      label: "Which category would you like to play with?",
      selectedOption: "Select a category to begin.",
      values: [
        "animal",
        "galaxy",
        "flower",
        "nature",
        "fantasy",
        "musical instrument",
      ],
    };
  }
  
  const { label, selectedOption, values } = options;
  const [selectedValue, setSelectedValue] = useState(values[0]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <div className="select-wrapper">
      <label htmlFor="floatingSelect">{label}</label>
      <select
        className="form-select"
        id="floatingSelect"
        aria-label="Floating label select example"
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="" disabled>
          {selectedOption}
        </option>
        {values.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectSection;
