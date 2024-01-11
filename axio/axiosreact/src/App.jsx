
// import { useState, useEffect } from "react";
// import "./App.css";
// import axios from "./axio.jsx";
import Com from './component/Com.jsx'
import Axio2 from './component/Axio2.jsx'
import Axiosadd from './component/axiosadd.jsx'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



import "./App.css";
import Home from './component/addtodo/Home.jsx';
import Create from './component/addtodo/Create.jsx';
import Update from './component/addtodo/Update.jsx';
import Read from './component/addtodo/Read.jsx';
import Man from './redux/man.jsx'
function App(){
 return (
   <>
     {/* <Com/> */}
     {/* <Axio2/> */}
     {/* <Axiosadd/> */}
     {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
          <Route path='/read/:id' element={<Read/>}></Route>
        </Routes>
     </BrowserRouter> */}
     <Man/>


   </>
 )
}

// const App = () => {
//   const [myData, setMyData] = useState([]);
//   const [isError, setIsError] = useState("");

//   // using Async Await
//   const getMyPostData = async () => {
//     try {
//       const res = await axios.get("/posts");
//       setMyData(res.data);
//     } catch (error) {
//       setIsError(error.message);
//     }
//   };

//   useEffect(() => {
//     getMyPostData();
//   }, []);

//   return (
//     <>
//       <h1>Axios Tutorial</h1>
//       {isError !== "" && <h2>{isError}</h2>}

//       <div className="grid">
//         {myData.slice(0, 9).map((post) => {
//           const { body, id, title } = post;
//           return (
//             <div key={id} className="card">
//               <h2>{title.slice(0, 15).toUpperCase()}</h2>
//               <p>{body.slice(0, 100)}</p>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };


export default App;