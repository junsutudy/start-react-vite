import { useState, useEffect } from "react";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import Post from "./Post";

function PostsList({ isPosting, onCloseModal }) {
  const [posts, setPosts] = useState([]);

  const [isFetching, setIsFetching] = useState();

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts/");
      const resData = await response.json();

      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);
  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts/", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onCloseModal}>
          <NewPost onCancel={onCloseModal} onSubmit={addPostHandler} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {[
            posts.map((element) => (
              <Post
                key={Post.body}
                author={element.author}
                body={element.body}
              />
            )),
          ]}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading posts..</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
