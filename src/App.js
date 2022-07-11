import React, { useContext, useMemo, useState } from "react";
import "./App.css";
import Form from "./components/form/form";
import Posts from "./components/posts/posts";
import Filter from "./components/filter/Filter";
import Modal from "./components/modal/modal";
import Button from "./components/button/button";
import { PostsContext } from "./useContext/changeContext";
import { ModalContext } from "./useContext/modalContext";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  const { posts, setposts } = useContext(PostsContext);
  const { modal, setmodal } = useContext(ModalContext);

  const [selectedSort, setselectedSort] = useState("");
  const [search, setsearch] = useState("");

  const [filterdate, setfilterdate] = useState("");

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  function getDate(datap) {
    let arr = datap.split(".");
    return new Date(arr[2], arr[1] - 1, arr[0]);
  }

  function planeDate(day) {
    let arr = new Date().toLocaleDateString().split(".");
    let datePlan = new Date(arr[2], arr[1] - 1, arr[0]);
    datePlan.setDate(datePlan.getDate() + day);
    return datePlan;
  }

  const [searchtype, setsearchtype] = useState("");

  const searchSortPosts = useMemo(() => {
    // if(searchtype === "") return setsearch("");
    if (filterdate === "day")
      return sortedPosts.filter((post) => getDate(post.data) < planeDate(1));
    if (filterdate === "week")
      return sortedPosts.filter((post) => getDate(post.data) < planeDate(7));
    if (filterdate === "month")
      return sortedPosts.filter((post) => getDate(post.data) < planeDate(30));

    if (searchtype === "title")
      return sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
    if (searchtype === "description")
      return sortedPosts.filter((post) =>
        post.description.toLowerCase().includes(search.toLowerCase())
      );
    if (searchtype === "priority")
      return sortedPosts.filter((post) =>
        post.priority.toLowerCase().includes(search.toLowerCase())
      );
    if (searchtype === "data")
      return sortedPosts.filter((post) =>
        post.data.toLowerCase().includes(search.toLowerCase())
      );
    else
      return sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
  }, [search, sortedPosts, searchtype, filterdate]);

  function createPost(newPostAdd) {
    setposts([...posts, newPostAdd]);
    setmodal("");
  }

  function removePost(post) {
    setposts(posts.filter((elem) => elem.id !== post.id));
  }

  function donePost(post) {
    post.done = true;
    setposts([...posts]);
  }
  
  function changeTextPost(post) {   
    post.typearea = !post.typearea;
    setposts([...posts]);
  }

  function changeTitle(post) {
    setposts([...posts]);
  }

  return (
    <div className="App">
      <Button
        text="Add task"
        type_hover="green"
        onClick={() => setmodal("active")}
      />

      <Modal modal={modal} setmodal={setmodal}>
        <Form createPost={createPost} value={selectedSort} />
      </Modal>

      <Router>
        <Switch>
          <Route path="/" exact>
            <Filter
              planeDate={planeDate}
              value={selectedSort}
              search={search}
              setsearch={setsearch}
              onChange={setselectedSort}
              setsearchtype={setsearchtype}
              setfilterdate={setfilterdate}
              filterdate={filterdate}
              searchtype={searchtype}
              defaultValue="Sort by"
              options={[               
                { name: "Title", value: "title" },
                { name: "Description", value: "description" },
                { name: "Priority", value: "priority" },
                { name: "Data", value: "data" },
                { name: "Cancel", value: "" },
              ]}
              optionsdate={[
                { name: "Day", value: "day" },
                { name: "Week", value: "week" },
                { name: "Month", value: "month" },
                { name: "Cancel", value: "" },
              ]}
            />
            <Posts
              changeTitle={changeTitle}
              changeTextPost={changeTextPost}
              donePost={donePost}
              removePost={removePost}
              posts={searchSortPosts}
              title="Tasks"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
