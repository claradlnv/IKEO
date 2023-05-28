import '../../styles/App.css';
import Banner from '../../components/Banner';
import ItemList from '../../components/ItemList';

function App() {
  document.title = "IKEO";
  return (
    <div>
      <Banner />
      <ItemList />
    </div>
    
  )
    
}

export default App;
