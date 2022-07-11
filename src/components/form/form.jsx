import { useState } from "react";
import Button from "../button/button";
import "./form.css";

export default function Form({ createPost }) {
  const [newpost, setnewpost] = useState({
    title: "",
    description: "",
    priority: "Low",
    data: '',
  });

 

  function addNewPost(event) {
    event.preventDefault();
    if(!newpost.title || !newpost.data ) return;
    if( new Date(newpost.data) < new Date() ) return alert('no');
   

    const newPostAdd = {
      ...newpost,
      id: Date.now(),
      done: false,
      data: new Date(newpost.data).toLocaleDateString(),     
    };

    createPost(newPostAdd);

    setnewpost({
      title: "",
      description: "",
      priority: "Low",
      data: '',
    });
  }

  return (
    <form className="form">
      <input className='input_form'
        type="text"
        placeholder="Title task"
        value={newpost.title}
        onChange={(event) =>
          setnewpost({ ...newpost, title: event.target.value })
        }
      />
      <input className='input_form'
        type="text"
        placeholder="Description task"
        value={newpost.description}
        onChange={(event) =>
          setnewpost({ ...newpost, description: event.target.value })
        }
      />
      <input className='input_form'
        type="text"
        placeholder="Execute before: (MM.DD.YY)"
        value={newpost.data}
        onChange={(event) =>{          
          setnewpost({ ...newpost, data: event.target.value});}
        }
      />
      <p>Priority</p>
      <select id='priority' value={newpost.priority}  onChange={(event) => setnewpost({...newpost, priority: event.target.value})}>
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

      <Button text="Add" type_hover="green" onClick={addNewPost} />
    </form>
  );
}
