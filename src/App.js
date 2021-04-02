import { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');

  const options = [
    { name: 'Option 1', url: 'https://kahoot.it/challenge/07915018?challenge-id=b026a078-a676-4749-ad77-df08ba3a894c_1617390735536' },
    { name: 'Option 2', url: 'https://kahoot.it/challenge/01893423?challenge-id=b026a078-a676-4749-ad77-df08ba3a894c_1617390081504' }
  ];

  return (
    <div className="App">
      <h1>Kahoot iFrame</h1>
      <form>
        <h2>Set your Kahoot</h2>
        <h3>Option 1: Paste your URL</h3>
        <label>
          URL:
          <input type="text" value={url} onChange={(e) => {setUrl(e.target.value);}} />
        </label>
        <h3>Option 2: Choose one option</h3>
        <ul>
          {options.map(option => (
            <li className={option.url === url ? 'active' : ''} onClick={() => setUrl(option.url)}>
              {option.name}
            </li>
          ))}
        </ul>
      </form>
      <hr />
      {url ? (
        <>
          <iframe title="Kahoot Iframe" frameborder="0" name="Kahoot" width="90%" height="500px" src={url}></iframe>
        </>
      ) : null}
    </div>
  );
}

export default App;
