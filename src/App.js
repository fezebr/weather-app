import React from 'react';
import Search from './components/search/Search';
import Content from './components/content/Content';

function App() {
  return (
    <div className="container">
      <div className="app">
        <main>
         <Search/>
         <Content/>
        </main>
      </div>
    </div>
  );
}

export default App;
