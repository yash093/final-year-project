import React, { useState } from "react";

function Note(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  const styles = {
    note: {
      width: "200px",
      height: "200px",
      perspective: "1000px",
    },
    front: {
      backgroundColor: "#fff",
      width: "100%",
      height: "100%",
      position: "absolute",
      backfaceVisibility: "hidden",
      transform: isFlipped ? "rotateY(-180deg)" : "rotateY(0deg)",
      transition: "transform 0.5s",
    },
    back: {
      backgroundColor: "#f0f0f0",
      width: "100%",
      height: "100%",
      position: "absolute",
      backfaceVisibility: "hidden",
      transform: isFlipped ? "rotateY(0deg)" : "rotateY(180deg)",
      transition: "transform 0.5s",
      display: isFlipped ? "block" : "none",
    },
  };

  return (
    <div className="note" style={styles.note} onClick={handleFlip}>
      <div className="front" style={styles.front}>
        <h1>{props.title}</h1>
        <button onClick={handleClick}>DELETE</button>
      </div>
      <div className="back" style={styles.back}>
        <h1>{props.title}</h1>
        <p>{props.content}</p> {/* Displaying the description on the back */}
      </div>
    </div>
  );
}

export default Note;
