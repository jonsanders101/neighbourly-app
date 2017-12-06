import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
import FeedContainer from './FeedContainer';
import Socket from './socket.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
      connected: false
    };
  }

  componentDidMount(){
    let socket = this.socket = new Socket();
    socket.on('connect', this.onConnect.bind(this));
    socket.on('disconnect', this.onDisconnect.bind(this));
    socket.on('feed add', this.onAddFeed.bind(this))
  }

  onConnect() {
    this.setState({connected: true});
  }
  onDisconnect() {
    this.setState({})
  }

  onAddFeed(feed) {
    let{feeds} = this.state;
    feeds.push(feed);
    this.setState({feeds});
  }

  addFeed(name) {
    this.socket.emit('feed add', {name});
  }

  render() {
    return (
      <div className="App">
        <Signup addFeed={this.addFeed.bind(this)} />
        <FeedContainer feeds={this.state.feeds} />
      </div>
    );
  }
}

export default App;