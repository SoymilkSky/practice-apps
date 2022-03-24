import React from 'react';

class GlossaryEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editView: false,
      newDef: ''
    };
    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  handleEditButton(e) {
    e.preventDefault();
    this.setState({ editView: !this.state.editView });
  }

  handleDeleteButton(e) {
    e.preventDefault();
    this.props.delete(this.props.entry);
  }

  handleEditSubmit(e) {
    e.preventDefault();
    this.props.edit(this.props.entry, this.state.newDef);
    this.setState({ newDef: '' });
  }

  render() {
    return (
      <div>
        <br></br>
        <span>Entry #{this.props.index}</span>
        <br></br>
        <span>word: {this.props.entry.word}</span>
        <br></br>
        <span>definition: {this.props.entry.definition}</span>
        <br></br>
        <button onClick={this.handleEditButton}>Edit</button>
        <button onClick={this.handleDeleteButton}>Delete</button>
        {this.state.editView ?
          <form onSubmit={this.handleEditSubmit}>
            <input
              type="text"
              value={ this.state.newDef }
              onChange={q => this.setState({ newDef: q.target.value }) }/>
            <input type="submit" value="submit new definition"/>
          </form>
        : null}
      </div>
    )
  }
}

export default GlossaryEntry;