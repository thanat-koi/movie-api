import React from 'react';
import './App.css';
import Axios from 'axios';
import Movie from './Movie';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {rows: []};
  }
  search = (keyword) => {
    console.log(keyword);

    const dataArray = [];
    const url ='https://api.themoviedb.org/3/search/movie?api_key=d293c0e815fe25592da220b5bd5828b1&query=' + keyword;
    
    Axios.get(url).then(result => {
      console.log(JSON.stringify(result.data.results));
      result.data.results.forEach(item => {
        item.poster = 'https://image.tmdb.org/t/p/w185' + item.poster 
        dataArray.push(item);
      })

      this.setState({rows: dataArray});

    })
  }

  render() {

  return (
    <div className="App">
      {/* JSX */}
      <table className='NavBar'>
        <tbody>
          <tr>
            <td>
              <img src={require('./react.svg')} width="50" />
            </td>
            <td>
              Test React.js
            </td>
        </tr>
        </tbody>
      </table>
    

      <input style={{fontSize: 24, display: 'block', width: '100%', paddingLeft: 10, }} 
      placeholder= 'Enter your movie name'
      onChange={(e) => {this.search(e.target.value) }} />

      {this.state.rows.map(item => (
        <Movie movie={item} />

      )) }

    </div>
    
  )};
}

export default App;
