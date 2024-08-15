import React, { useState } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';

function App() {
  const [count, setCount] = useState(0); //카운트 state
  const title = "Counter App"
  const year = new Date().getFullYear();

  return (
    <div>
      <Header title={title}/>
      <Content count={count} setCount={setCount}/>
      <Footer year={year}/>
    </div>
  );
}

export default App;