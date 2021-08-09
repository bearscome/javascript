import * as React from "react";
import Counter from './study/Counter';
import Profile from "./study/Profile";
import TodoList from "./study/TodoList";

const App = () => {
    return (
        <div>
            <Profile  name = 'name' job = 'job'/>
            <Counter />
        </div>
    )
}

export default App;