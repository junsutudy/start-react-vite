import { useLoaderData } from "react-router-dom";
import classes from "./PostsList.module.css";
import Post from "./Post";

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {[
            posts.map((element) => (
              <Post
                key={element.body}
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
