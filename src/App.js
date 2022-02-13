
import './App.css';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function App(){
  const user =useSelector(selectUser)
  return(
    <div >
      {!user ? <Login/> : (
        <>
         <Nav/>
        <div className='app_body'>
          <Sidebar/>
          <Feed/>
          {/* news */}
      </div>
      </>
      )}
      
      
     
    </div>
  )
}
 export default App;
