import {Routes,Route} from 'react-router-dom';
import Body from  "./Body.js"

function App() {
  return (
    <div class="relative font-inter antialiased">
        <div class="text-center text-2xl pr-8 pl-8 pt-8 text-gray-900 ">
          Choose the best plan for your bussiness
        </div>
        <Routes>
          <Route path="/" element={<Body/>}/> 
        </Routes>
      
    </div>
  );
}

export default App;
