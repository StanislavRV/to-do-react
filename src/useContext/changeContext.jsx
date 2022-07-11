import React, { useState } from "react";


const PostsContext = React.createContext(null);
export{PostsContext}



export default function PostsContextProvider({children}) {
    
    const[posts, setposts] = useState ([
        {
            id: 1,
            title: "Title",
            description:
            "Description",
            done: false,      
            data: new Date().toLocaleDateString(),
            priority: 'High',
            typearea: false,
          },
          {
            id: 2,
            title: "It's title",
            description: "It's Description",
            done: false,
            data: new Date().toLocaleDateString(),
            priority: 'Low',
            typearea: false,
          },
          {
            id: 3,
            title: "A title",
            description: "A description",
            done: false,
            data: new Date().toLocaleDateString(),
            priority: 'Medium',
            typearea: false,
          },
    ]);

    return (
        <PostsContext.Provider value={{
            posts, setposts
        }}>
            {children}
        </PostsContext.Provider>
    )
}