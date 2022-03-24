import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.search(this.state.query);
    this.setState({ query: '' });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            value={this.state.query}
            placeholder="search for a word"
            onChange={(e) => this.setState({ query: e.target.value })}/>
          <input type="submit" value="search"/>
        </form>
      </div>
    )
  }
}

export default Search;