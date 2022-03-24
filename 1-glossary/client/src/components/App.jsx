import React from 'react';
import axios from 'axios';
import Add from './Add.jsx';
import Search from './Search.jsx';
import Glossary from './Glossary.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      glossaryList: [],
      goBackState: false
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  componentDidMount() {
    this.loadAll();
  }

  loadAll() {
    axios.get('/glossary')
      .then(res => this.setState({ glossaryList: res.data }))
      .catch(err => console.log(err));
  }

  handleAdd(entry) {
    axios.post('/glossary', entry)
      .then(() => this.loadAll())
      .catch(err => console.log(err));
  }

  handleSearch(query) {
    axios.get('/glossary/search', {params: {query}})
      .then(res => this.setState({ glossaryList: res.data, goBackState: true }))
      .catch(err => console.log(err));
  }

  handleEdit(query, newDef) {
    axios.patch('/glossary', {query: query, newData: newDef})
      .then(() => this.loadAll())
      .catch(err => console.log(err));
  }

  handleDelete(query) {
    axios.delete('/glossary', {data: {query}})
      .then(() => this.loadAll())
      .catch(err => console.log(err));
  }

  handleGoBack() {
    this.setState({ goBackState: false });
    this.loadAll();
  }

  render() {
    return(
      <div>
        <h1>this is a fun glossary app !</h1>
        <Add add={this.handleAdd}/>
        <br></br>
        <Search search={this.handleSearch}/>
        {this.state.goBackState ? <button onClick={this.handleGoBack}>Go Back</button> : null}
        <br></br>
        <Glossary
          glossary={this.state.glossaryList}
          delete={this.handleDelete}
          edit={this.handleEdit}/>
      </div>
    )
  }
}

export default App;