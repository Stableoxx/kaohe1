import Header from './components/header'
import Search from './components/search'
import List from './components/list'
import SearchItem from './components/searchItem';
import './App.css';
import LayoutApp from './layouts'
import VideoComponents from './components/VideoComponents'

function App() {
  return (
    <div className="App">
      <LayoutApp />
      <VideoComponents />
      {/* <Search></Search>
      <List></List>
      <SearchItem></SearchItem> */}
    </div>
  );
}

export default App;
