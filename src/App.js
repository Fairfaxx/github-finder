import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/layouts/users/Users';
import axios from 'axios';
import './App.css';
import Search from './components/layouts/users/Search';
import Alert from './components/layouts/Alert';


class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
  //   this.setState({ loading: true })
  //   const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({ users: response.data, loading: false })
  // }

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: response.data.items, loading: false });
  }

  clearUsers = () => {
    this.setState({ users: [], loading: false })
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  }

  render() {

    const { users, loading } = this.state;

    return (
      <div className="App" >
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users
            loading={loading}
            users={users}
          />
        </div>
      </div>
    );
  }
}

export default App;
