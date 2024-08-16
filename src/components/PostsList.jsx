import { useState } from "react";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import Post from "./Post";

function PostsList({ isPosting, onCloseModal }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onCloseModal}>
          <NewPost onCancel={onCloseModal} onSubmit={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
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
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
