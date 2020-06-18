import React, { Component } from 'react'

export default class Movie extends Component { 
    constructor(props){
        super(props)
    }
    render() {
        const {id, title, overview, poster} = this.props.movie;

        return (
            <table key={id} style={{textAlign: "left"}}>
              <tbody>
                <tr>
                  <td>
                    <img src={poster}  />
                  </td>
                  <td>
                    <strong>{title}</strong>
                    <p>{overview}</p>
                  </td>
              </tr>
              </tbody>
            </table>
        )
    }
}
