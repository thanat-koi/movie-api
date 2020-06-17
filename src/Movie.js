import React, { Component } from 'react'

export default class Movie extends Component {
    
    constructor(props){
        super(props)
    }
    render() {
        return (
            <table className='NavBar'>
              <tbody>
                <tr>
                  <td>
                    <img src={this.props.poster}  />
                  </td>
                  <td>
                    <strong>{this.props.movie.title}</strong>
                    <p>{this.props.movie.overview}</p>
                  </td>
              </tr>
              </tbody>
            </table>
        )
    }
}
