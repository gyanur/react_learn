

// import React from "react";
// import boxes from "./boxes"; // Import your data source
// import "./styles.css";
// import Box from "./Box";



// function App() {
// const [squares] = React.useState(boxes)

// function toggle(){  
// }


// const squareElement = squares.map(square=>  (
//   <Box key={square.id}  on={square.on}/>
// ))

//   return(
//     <main>
//       {squareElement}
//     </main>
//   )
// }

// export default App;



// import React from 'react'; // Make sure to import React
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import Layout from './pages/Layout'; // Import your Layout component
import Home from './pages/Home'; // Import your Home component
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
