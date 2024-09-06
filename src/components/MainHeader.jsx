import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <a href="/create-post" className={classes.button}>
          <MdPostAdd size={18} />
          New Post
        </a>
      </p>
    </header>
  );
}

export default MainHeader;
