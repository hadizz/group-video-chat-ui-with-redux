import React from 'react';

function App() {

  const Box = () => (
      <div>
        box
      </div>
  )

  return (
      <div className="d-flex flex-column flex-x-between h100vh">
        <div>header</div>
        <div>main</div>
        <div>bottom</div>
      </div>
  );
}

export default App;
