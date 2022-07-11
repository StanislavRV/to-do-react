
import Post from "../post/post";
import "./posts.css";

export default function Posts({ posts, title, removePost, donePost, changePost, changeTextPost, changeTitle}) {



  return (
    <div className="posts">

      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>{posts.length ? title : "Congratulation!!! You have 0 tasks."}</h1>
      
      {posts.map((post, index) => (
        <Post changePost={changePost} changeTitle={changeTitle} changeTextPost={changeTextPost} donePost={donePost} removePost={removePost} number={index + 1} key={post.id} post={post} />
      ))}

    </div>
  );
}
