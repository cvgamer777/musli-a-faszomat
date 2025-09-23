import React, {Component} from "react";
import '../App.css'

export default class MueslisPage extends React.Component {
      state = {
    musliData : {
      result : []
    }

  }
    render() {
        return(
            <div>
                <main id="content-area">
                  <h1>My mueslis</h1>
                  <table>
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.musliData.result.map(muesli=> <tr key={muesli.id}>
                        <td>{muesli.id}</td>
                        <td>{muesli.name}</td>
                        <td>{muesli.price}</td>
                      </tr>)}
                    </tbody>
                  </table>
                </main>
        </div>
        )
    }
    async componentDidMount() {
        try {
          let musliData = await fetch('http://localhost:3333/muslis')
          console.log('musliData', musliData) 
          musliData = await musliData.json()
          console.log('musliData',musliData)
          this.setState({musliData})
        }
        catch(e) {
          console.warn(e)
        }

  }
}