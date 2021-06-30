import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    const getApi = async () => {
      let url = "https://gist.githubusercontent.com/carmandomx/3d7ac5f15af87a587e1d25f5ba96de61/raw/e2d848b87c730a580077de221666343c15b1a243/gistfile1.txt"
      const response = await fetch(url).then(res => res.json())
      setData(response)
    }
    getApi()
  }, [])

  useEffect(() => {
    if (data) {
      console.log(data)
    }
  },[data])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
