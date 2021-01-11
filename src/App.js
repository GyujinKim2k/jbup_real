import logo from './logo.svg';
import './App.css';
import {Button, Progress} from 'semantic-ui-react'
function App() {
  return (
    <div>
    <p>지아보</p>
    <Button primary> 맛있누 </Button>
    <Progress percent = {66} />
    </div>
  );
}

export default App;
