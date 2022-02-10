
import './App.css';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Feed from './Feed'


function App(){
  return(
    <div>
      {/* {nav component} */}
      <Nav/>
      <div className='app_body'>
          <Sidebar/>
          <Feed/>
          {/* news */}
      </div>
      
     
    </div>
  )
}
 export default App;
