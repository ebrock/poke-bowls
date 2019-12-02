import React from "react";
import Card from "./card";

class Results extends React.Component {
  render() {
    const isLoaded = this.props.loaded;
    const name = this.props.name;
    return (
      <div>
        {isLoaded ? (
          <Card
            avatar={this.props.avatar}
            avatarBack={this.props.avatarBack}
            name={this.props.name}
            type={this.props.type}
            id={this.props.id}
            flavorText={this.props.flavorText}
            genus={this.props.genus}
            habitat={this.props.habitat}
            abilities={this.props.abilities}
          />
        ) : name ? (
          <div className="center mt-3">
            Could not find <b>{name}</b>
          </div>
        ) : (
          <span></span>
        )}
        {/* <h1>Results</h1>
        <p>{this.props.flavorText}</p>
        <h4>Name</h4>
        <p>{this.props.name}</p>
        <h4>Abilities</h4>
        <ul>
          {this.props.abilities.map(a => (
            <li>{a.ability.name}</li>
          ))}
        </ul>
        <p>{this.props.type}</p>
        <h4>Moves</h4>
        <ol>
          {this.props.moves.map(r => (
            <li key={r}>{r}</li>
          ))}
        </ol> */}
      </div>
    );
  }
}

export default Results;
