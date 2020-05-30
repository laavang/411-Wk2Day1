import React, { Component } from 'react';

class User extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isSelected: false
    };
  }

  detailsClick = () => {
    this.setState({
      isSelected: !this.state.isSelected
    });
  }



  render() {
    return (
      <div style={{margin: '30px', textAlign: 'center', border: '1px solid black', padding: '30px', width: '300px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <div style={{fontSize: '18pt', fontWeight:'600', marginBottom: '10px'}}>{this.props.user.name.first}</div>
        <img style={{margin: '5px'}} src={this.props.user.picture.thumbnail} />
        <button style={{margin: '5px'}} onClick={this.detailsClick}>{this.state.isSelected ? 'Hide Details' : 'Show Details'}</button>
        <div style={{margin: '5px'}} class="details">
          {
            this.state.isSelected
              ?
              <div style={{margin: '5px'}}>
              <div ><b>Email: </b>{this.props.user.email}</div>
              <div><b>Cell: </b>{this.props.user.cell}</div>
              </div>
              :''
          }
        </div>
      </div>

    )
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }


  componentDidMount() {
    fetch('https://randomuser.me/api?results=25')
      .then(json => json.json())
      .then(json => json.results)
      .then(data => {
        this.setState({
          users: data
        });
        console.log(data);
      })
    // .catch(error => console.log('parsing failed', error));
  }

  render() {
    return (
      <div className="App" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        {this.state.users.map((userData, index) => (
          <User key={index} user={userData} />
        ))}
      </div>
    );
  }
}

export default App;
