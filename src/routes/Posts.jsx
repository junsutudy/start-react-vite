import PostsList from "../components/PostsList";
import MainHeader from "../components/MainHeader";
import { useState } from "react";

function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <main>
        <PostsList isPosting={modalIsVisible} onCloseModal={hideModalHandler} />
      </main>
    </>
  );
}

export default Posts;
