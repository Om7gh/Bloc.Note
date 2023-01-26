import React, { Fragment, useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
type note = {
  noteId: number;
  title: string;
  content: string;
  onAdd: Function;
};
const Area = (props: note) => {
  const [note, setNote] = useState({
    Type: "",
    title: "",
    content: "",
  });

  function handlerSubmit(e: any) {
    const { name, value } = e.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function onSubmit() {
    if (note.title === "" || note.content === "") {
      alert("Write something first");
    } else {
      props.onAdd(note);
      setNote({
        Type: "",
        title: "",
        content: "",
      });
    }
  }

  return (
    <Fragment>
      <form onSubmit={(e: any) => e.preventDefault()}>
        <div className="box">
          <label htmlFor="title">title</label>
          <input
            name="title"
            type="text"
            placeholder="..."
            id="title"
            value={note.title}
            onChange={handlerSubmit}
          />
        </div>
        <div className="box">
          <label htmlFor="content">take a note</label>
          <textarea
            name="content"
            rows={3}
            placeholder="..."
            id="content"
            value={note.content}
            onChange={handlerSubmit}
          />
        </div>

        <InputLabel
          id="demo-simple-select-helper-label"
          sx={{ color: "var(--main-color)" }}
        >
          Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Age"
          name="Type"
          value={note.Type}
          onChange={handlerSubmit}
          sx={{ color: " var(--main-color)" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Personal Note">Personal Note</MenuItem>
          <MenuItem value="Work Note">Work Note</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
        <button type="submit" onClick={onSubmit}>
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default Area;
