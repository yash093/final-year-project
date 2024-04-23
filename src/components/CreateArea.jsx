// import React, { useState } from "react";

// function CreateArea(props) {
//   const [note, setNote] = useState({
//     title: "",
//     content: "",
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setNote((prevNote) => {
//       return {
//         ...prevNote,
//         [name]: value,
//       };
//     });
//   }

//   function submitNote(event) {
//     props.onAdd(note);
//     setNote({
//       title: "",
//       content: "",
//     });
//     event.preventDefault();
//   }

//   return (
//     <div>
//       <form>
//         <input
//           name="title"
//           onChange={handleChange}
//           value={note.title}
//           placeholder="Title"
//         />
//         <textarea
//           name="content"
//           onChange={handleChange}
//           value={note.content}
//           placeholder="Take a note..."
//           rows="3"
//         />
//         <button onClick={submitNote}>+</button>
//       </form>
//     </div>
//   );
// }

// export default CreateArea;

import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "title") {
      setTitle(value);
      updateDescription(value);
    } else {
      setDescription(value);
    }
  }

  function updateDescription(title) {
    // Update content based on the title entered
    let content = "";
    // Add logic to determine content based on the title
    if (title === "dypiemr") {
      content = "Dy Patil Institute  of Management and Research";
    } else if (title === "Another Example") {
      content = "This is another example description.";
    }
    setDescription(content);
  }

  function submitNote(event) {
    props.onAdd({ title: title, content: description });
    setTitle("");
    setDescription("");
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={title}
          placeholder="Title"
        />
        <textarea
          name="description"
          onChange={handleChange}
          value={description}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
