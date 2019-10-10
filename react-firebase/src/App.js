import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import TeamMembers from './components/TeamMembers';
import firebase from 'firebase';

class App extends Component {
  constructor(props){

    super(props);
      var firebaseConfig = {
        apiKey: "AIzaSyC1Y2rPz1zdrRzal0Fsb8dcCV54Iod5LoY",
        authDomain: "cse110firebase-e4443.firebaseapp.com",
        databaseURL: "https://cse110firebase-e4443.firebaseio.com",
        projectId: "cse110firebase-e4443",
        storageBucket: "cse110firebase-e4443.appspot.com",
        messagingSenderId: "1093832051815",
        appId: "1:1093832051815:web:5effe891b330d5a5f558c2",
        measurementId: "G-20FEPHBCHQ"
      };
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();

  }
  render(){
    return (
      <div>
        <TeamMembers db={firebase}/>
      </div>

    );
  }
}

export default App;
