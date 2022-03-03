import React from 'react';
import logo from './logo.svg';
import TodoFeature from './features/Todo';
import SongFeature from './features/Song';

function App() {
  return (
    <div className="App">
      {/* this is app js */}
      <TodoFeature />
      <SongFeature />
    </div>
  );
}
export default App;
