

import React from "react";
import boxes from "./boxes"; // Import your data source
import "./styles.css";
import Box from "./Box";



function App() {
const [squares] = React.useState(boxes)



const squareElement = squares.map(square=>  (
  <Box key={square.id}  on={square.on} />

))

  return(
    <main>
      {squareElement}
    </main>
  )
}

export default App;