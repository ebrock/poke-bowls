import React from "react";
import NavBar from "./components/navbar";
import Search from "./components/search";
import Results from "./components/results";

class App extends React.Component {
  state = {
    input: "",
    name: "",
    moves: [],
    loaded: false,
    type: [],
    avatar: "",
    avatarBack: "",
    id: "",
    flavorText: "",
    genus: "",
    habitat: "",
    baseExp: "",
    abilities: [],
    error: null
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      input: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // Ajax call
    console.log("Ajax call...");
    let name = this.state.input;
    name = name.toLowerCase();
    fetch("https://pokeapi.co/api/v2/pokemon/" + name + "/")
      .then(res => res.json())
      .then(
        data => {
          console.log(data);
          console.log("type", data.types[0].type.name);
          const abilities = data.abilities;
          const flavorUrl = data.species.url;
          const id = data.id;
          const moves = data.moves.map(m => m.move.name);
          const avatar = data.sprites.front_default;
          const avatarBack = data.sprites.back_default;
          this.setState({
            loaded: true,
            name: name,
            type: [data.types[0].type.name],
            moves: moves,
            avatar: avatar,
            avatarBack: avatarBack,
            abilities: abilities,
            id: id
          });
          // TODO: Need to fetch the first English text.
          fetch(flavorUrl)
            .then(res => res.json())
            .then(data => {
              data.flavor_text_entries.find(entry => {
                let flavorText = "";
                if (entry.language.name === "en") {
                  flavorText = entry.flavor_text;
                }
                this.setState({
                  flavorText: flavorText
                });
              });
              data.genera.find(entry => {
                if (entry.language.name === "en") {
                  let genus = entry.genus;
                  console.log(genus);
                  this.setState({ genus });
                }
              });
            });
        },
        error => {
          this.setState({
            loaded: false,
            name: this.state.input,
            type: [],
            moves: [],
            avatar: "",
            results: ["no such pokemon"],
            avatarBack: "",
            id: "",
            flavorText: "",
            genus: "",
            abilities: [],
            error
          });
        }
      );
    console.log("this.state.results", this.state.type);
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Search onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Results
          name={this.state.name}
          type={this.state.type}
          moves={this.state.moves}
          avatar={this.state.avatar}
          avatarBack={this.state.avatarBack}
          loaded={this.state.loaded}
          id={this.state.id}
          flavorText={this.state.flavorText}
          genus={this.state.genus}
          habitat={this.state.habitat}
          abilities={this.state.abilities}
        />
      </div>
    );
  }
}

export default App;
