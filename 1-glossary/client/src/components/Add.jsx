import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.add( {word: this.state.word, definition: this.state.definition} );
    this.setState({ word: '', definition: '' })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.word}
            placeholder="enter a word"
            onChange={(e) => this.setState({word: e.target.value})}/>
          <br></br>
          <textarea
            placeholder="enter a definition"
            value={this.state.definition}
            style={{resize: "none"}}
            rows="4"
            cols="45"
            onChange={e => this.setState({definition: e.target.value})}>
          </textarea>
          <br></br>
          <input type="submit" value="add an entry!"/>
        </form>
      </div>
    )
  }
}

export default Add;