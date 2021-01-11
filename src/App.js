import React from 'react'
import {Image} from 'semantic-ui-react'
import dh from "./dh.png"

import Comments from './comment.js'

function App() {
  return (
    <div>
    <Image src = {dh} centered/>
    <Comments/>
    </div>
  );
}

export default App;
