import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Adress from './Components/Profile/Adress';



function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <div>
      <FullName/>
      <Adress/>
      </div>
    </div>
  );
}

export default App;
