import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = { term: '' };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  }

  onFormSubmit = (e) => {
    const { onTermSubmit } = this.props;
    const { term } = this.state;
    e.preventDefault();
    onTermSubmit(term);
    this.setState({ term: '' });
  }

  render() {
    const { term } = this.state;
    return (
      <div className= "search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={term} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    )
  }
}
