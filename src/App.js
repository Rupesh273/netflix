import Header from "./component/header";
import "./App.scss";
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Home from "./component/Home/Home";
import TvShow from "./component/TVshow/TvShow";

function App() {
  return (
   
   <Router>
   <Header/>
    <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path="/tvshow" element ={<TvShow/>} />
      <Route path="popular"/>
      
      

        
     </Routes>
  
   </Router>
  
  );
}

export default App;
