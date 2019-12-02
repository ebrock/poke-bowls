import React from "react";

class Card extends React.Component {
  getBadgeClasses = () => {
    const type = this.props.type[0];
    let classes = "badge m-2 badge-pill badge-";
    const types = [
      {
        title: "normal",
        types: ["normal", "ground", "flying", "rock"],
        badge: "secondary"
      },
      { title: "red", types: ["fire", "fighting"], badge: "danger" },
      { title: "blue", types: ["water", "ice"], badge: "primary" },
      { title: "green", types: ["poison", "grass", "bug"], badge: "success" },
      { title: "yellow", types: ["electric", "psychic"], badge: "warning" },
      { title: "dark", types: ["ghost", "dragon"], badge: "dark" }
    ];

    types.map(t => {
      if (t.types.includes(type)) {
        return (classes += t.badge);
      }
      return classes;
    });
    return classes;
  };

  setProperName = () => {
    let name = this.props.name;
    let firstLetter = name.charAt(0);
    name = firstLetter.toUpperCase() + name.substr(1);
    return name;
  };

  render() {
    return (
      <div className="card border-dark m-2 mx-auto" style={{ width: "18em" }}>
        <div className="row mx-auto">
          {/* <img
            class="card-img-top img-fluid col"
            src={this.props.avatar}
            style={{ width: "15em" }}
            alt=""
          />
          <img
            class="card-img-top img-fluid col"
            src={this.props.avatarBack}
            style={{ width: "15em" }}
            alt=""
          />
        */}
          <img
            className="card-img-top img-fluid mt-2"
            src={this.props.avatar}
            style={{ width: "8em" }}
            alt=""
          />
        </div>
        <div className="card-body pt-0">
          <h5 className="card-title">
            <b>{this.setProperName()}</b>
            <span className={this.getBadgeClasses()} style={{ width: "5em" }}>
              {this.props.type}
            </span>
            <span className="badge badge-info" style={{ width: "2.5em" }}>
              {this.props.id}
            </span>
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.genus}</h6>
          <p className="card-subtitle mb-2">{this.props.flavorText}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item active">Abilities</li>
            {this.props.abilities.map(a => (
              <li
                key={a.ability.name}
                className="list-group-item list-group-item-light"
              >
                {a.ability.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Card;
