import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div>
        <h1>Search</h1>
        <form onSubmit={this.props.onSubmit}>
          <input
            onChange={this.props.onChange}
            className="m-2"
            placeholder="Enter a Pokémon..."
            title="Name of a Pokémon."
            type="search"
            value={this.props.input}
            required
          />
          <button className="btn btn-primary" type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
