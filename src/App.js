import React,{Component} from 'react';
import './App.css';

import {CardList} from './component/card-list/card-list.component'
import {SearchBox} from './component/search-box/search-box.component'

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField:''
    }

    this.handleChange = this.handleChange.bind(this);
  }


componentDidMount() {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=>response.json())
  .then(users => this.setState({monsters :users}));

}
handleChange(e) {
  this.setState({searchField : e.target.value})
}



  render() {

    const {monsters, searchField} = this.state;
    const searchFieltred = monsters.filter(monster=> 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

      
     // console.log("Not found"+searchFieltred);

    return (
      <div className="App">
        
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        placeholder="search monster"
        handleChange={this.handleChange}
        ></SearchBox>
        <CardList monsters={searchFieltred}>
          

        </CardList>
       

    
          
      </div>
    );
  }
}



export default App;
