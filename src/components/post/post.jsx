import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Button from "../button/button";
import "./post.css";
import React from "react";

export default function Post(props) {

  
  return (
    <Router>
      <Switch>
      
        <Route path="/edit" exact>
          <div className="edit">
            <div className="edit_input">
              <input
                className={props.post.typearea ? "area area_click" : "area"}
                value={props.post.title}
                onChange={(event) =>
                  props.changeTitle(
                    props.post,
                    (props.post.title = event.target.value)
                  )
                }
              />
              
              <input
                className={props.post.typearea ? "area area_clickdata" : "area"}
                value={props.post.data}
                onChange={(event) =>
                  props.changeTitle(
                    props.post,
                    ( props.post.data = event.target.value )
                  )
                }
              />

              <textarea
                className={
                  props.post.typearea ? "area area_clickdescription" : "area"
                }
                value={props.post.description}
                onChange={(event) =>
                  props.changeTitle(
                    props.post,
                    (props.post.description = event.target.value)
                  )
                }
              />
              <div className={props.post.typearea ? "area area_priority" : "area"
                }>
                <p>Priority</p>
                <select
                  id="priority"
                  value={props.post.priority}
                  onChange={(event) =>
                    props.changeTitle(
                      props.post,
                      (props.post.priority = event.target.value)
                    )
                  }
                >
                  <option defaultValue key="low" value="Low">
                    Low
                  </option>
                  <option key="medium" value="Medium">
                    Medium
                  </option>
                  <option key="high" value="High">
                    High
                  </option>
                </select>
              </div>
            </div>
            <Link className="edit__button" to="/">
              <Button
                onClick={() => props.changeTextPost(props.post)}
                text="Done"
                type_hover="blue"
              />
            </Link>
          </div>
        </Route>
        <div
          id={props.post.id}
          className={"post " + (props.post.done ? "post_done" : "")}
        >
          <div className="post-title">
            <h2>
              {props.number}. {props.post.title}
            </h2>

            <div className="text__bolt">Execute before: {props.post.data}</div>

            <div>{props.post.description}</div>

            <div className="text__bolt">Priority: {props.post.priority}</div>
          </div>

          <div className={"post_button"}>
            <Button 
              onClick={() => props.removePost(props.post)}
              text="Delete"
              type_hover="red"
            />
            <Button
              onClick={() => props.donePost(props.post)}
              text="Done"
              type_hover="green"
            />
            <Link to="/edit">
              <Button
                onClick={() => props.changeTextPost(props.post)}
                text="Edit"
                type_hover="blue"
              />
            </Link>
          </div>
        </div>
        
      </Switch>
    </Router>
  );
}
