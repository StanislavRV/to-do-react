

import Button from "../button/button";
import "./change.css";

export default function Change({ changePost, change, setchange, addchangePost }) { 

  if(change)   return (
    <div className="form_change">
      <input
        type="text"
        placeholder="Title task"
        value={change.title}
        onChange={(event) =>
            setchange({ ...change, title: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Description task"
        value={change?.description}
        // onChange={(event) =>
        //   setnewpost({ ...newpost, description: event.target.value })
        // }
      />
      <input
        type="text"
        placeholder="Execute before: (MM.DD.YY)"
        value={change.data}
        // onChange={(event) =>
        //   setnewpost({ ...newpost, data: event.target.value})
        // }
      />
      <p>Priority</p>
      <select id='priority' value={change.priority}  >
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

      <Button text="Change" type_hover="blue" onClick={() => setchange(change)} />
    </div>
  );
}
