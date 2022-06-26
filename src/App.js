import React from 'react';
import Todo from './Components/Todo';
import {TodoContextProvider} from './Components/TodoContext';
function App() {
  return (
    <div className="App">
      <TodoContextProvider>
          <Todo/>
      </TodoContextProvider>
    </div>
  );
}

export default App;
