import React from "react";
import { TiDelete } from "react-icons/ti";
import { motion } from "framer-motion";
type noteType = {
  title: string;
  content: string;
  id: number;
  onDelete: Function;
  Type: string;
};
const Note = (props: noteType) => {
  function deleteHandler() {
    props.onDelete(props.id);
  }
  return (
    <motion.div
      className="note"
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <TiDelete onClick={deleteHandler} />
      <h3>Note {props.id + 1}</h3>
      <div>
        <h3
          style={{
            backgroundColor: "#18171d",
            borderRadius: "8px",
            padding: "5px",
            marginBottom: "8px",
            marginTop: "-12px",
            fontSize: "1rem",
          }}
        >
          {props.Type}
        </h3>
        <h5>{props.title}</h5>
        <p>{props.content}</p>
      </div>
    </motion.div>
  );
};

export default Note;
