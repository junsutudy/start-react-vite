import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost({ onCancel, onSubmit }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    console.log(postData);
    onSubmit(postData);
    onCancel();
  }

  return (
    <Modal>
      <form className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button onClick={submitHandler}>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
