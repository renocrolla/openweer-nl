import React, {useState} from "react";
import './ToggleButton.css';
import ReactSwitch from "react-switch";

function ToggleButton({  setToggleButton }) {
  const [checked, setChecked] = useState(false);

  const handleChange = toggle => {
    setChecked(toggle);
    setToggleButton(toggle);
  }

  return (
    <section className="switch-container">
      <div className="switch">
      <label className="weekly-title">Weekoverzicht</label>
          <ReactSwitch
            checked={checked}
            onChange={handleChange}
          />
      </div>
    </section>
  );
}

export default ToggleButton;
