import './App.css';
import SearchBar from './components/SearchBar';
import Card from "./components/Card"
import data from "./data"
import Paginator from './components/Paginator';
import Notification from './components/Notification';

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}

      />
    )
  })

  const result = 'unknown';

  return (
    <div className="App">
      <header className="App-header">
        <h1>Diligent homework - The Movie Database search app</h1>
      </header>
      <SearchBar />
      {result && <Notification result={result}/>}
      <Paginator data={cards} />
    </div>
  );
}

export default App;
