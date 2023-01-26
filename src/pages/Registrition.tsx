import React, { useState } from "react";
import Form from "../components/Form.tsx";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const Registrition = () => {
  const [trigger, setTrigger] = useState(true);

  return (
    <div className="registration">
      <div className="choose">
        <InputLabel
          id="demo-simple-select-helper-label"
          sx={{ color: "var(--main-color)" }}
        >
          Choose type !
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Age"
          name="Type"
        >
          <MenuItem value="Register" onClick={() => setTrigger(false)}>
            Register
          </MenuItem>
          <MenuItem value="Login" onClick={() => setTrigger(true)}>
            Login
          </MenuItem>
        </Select>
      </div>
      {trigger ? <Form bName="Login" /> : <Form bName="Register" />}
    </div>
  );
};

export default Registrition;
