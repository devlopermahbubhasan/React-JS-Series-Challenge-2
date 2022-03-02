import './App.css';

function App() {
  const date = new Date();
  const curDate = date.toLocaleDateString();
  const time = new Date();
  const curTime = time.toLocaleTimeString();
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Name Is Mahbub Hasan</h1>
        <p>Current Date = {curDate}</p>
        <p>Current Time = {curTime}</p>
      </header>
    </div>
  );
}

export default App;
