import React, { createRef } from "react";
import "../components/Planets.css";
import { connect } from "react-redux";
import { getPlanets, getVehicles } from "../actions/index";
import { renderDestination, renderVehicles } from "../helpers/helpers";

class Planets extends React.Component {
  constructor() {
    super();
    this.vechicleRef = createRef();
  }
  state = {
    desttwo: [],
    destthree: [],
    destfour: [],
    vehicleone: [],
    vehicletwo: [],
    vehiclethree: [],
    vehiclefour: [],
    timeTaken: 0,
  };

  distanceDestinationOne = 0;
  distanceDestinationTwo = 0;
  distanceDestinationThree = 0;
  distanceDestinationFour = 0;

  componentDidMount() {
    this.props.getPlanets();
    this.props.getVehicles();
  }
  renderDestinationOne = () => {
    if (this.props.planets.length > 0) {
      return this.props.planets.map((planet) => {
        return (
          <option value={planet.distance} key={planet.distance}>
            {planet.name}
          </option>
        );
      });
    }
  };

  onSelectChange = (e) => {
    const remainingPlanet = this.props.planets.filter(
      (planet) => planet.distance !== Number(e.target.value)
    );
    this.distanceDestinationOne = e.target.value;
    const vehicles = this.props.vehicles.map((vehicle) => {
      return { ...vehicle, group: "vehicle1" };
    });
    this.setState({
      desttwo: remainingPlanet,
      vehicleone: vehicles,
    });
  };
  onSelectChangeTwo = (e) => {
    const remainingPlanet = this.state.desttwo.filter(
      (planet) => planet.distance !== Number(e.target.value)
    );
    this.distanceDestinationTwo = e.target.value;
    const vehicles = this.props.vehicles.map((vehicle) => {
      return { ...vehicle, group: "vehicle2" };
    });
    this.setState({
      destthree: remainingPlanet,
      vehicletwo: vehicles,
    });
  };
  onSelectChangeThree = (e) => {
    const remainingPlanet = this.state.destthree.filter(
      (planet) => planet.distance !== Number(e.target.value)
    );
    this.distanceDestinationThree = e.target.value;
    const vehicles = this.props.vehicles.map((vehicle) => {
      return { ...vehicle, group: "vehicle3" };
    });
    this.setState({
      destfour: remainingPlanet,
      vehiclethree: vehicles,
    });
  };
  onSelectChangeFour = (e) => {
    this.distanceDestinationFour = e.target.value;
    const vehicles = this.props.vehicles.map((vehicle) => {
      return { ...vehicle, group: "vehicle4" };
    });
    this.setState({ vechiclefour: this.props.vehicles, vehiclefour: vehicles });
  };
  onRadioChange = (e) => {
    const timeTaken = this.distanceDestinationOne / e.target.value;
    this.setState({ timeTaken: timeTaken });
  };
  onRadioChangeTwo = (e) => {
    let timeTaken = this.distanceDestinationTwo / e.target.value;
    timeTaken += this.state.timeTaken;
    this.setState({ timeTaken: timeTaken });
  };
  onRadioChangeThree = (e) => {
    let timeTaken = this.distanceDestinationThree / e.target.value;
    timeTaken += this.state.timeTaken;
    this.setState({ timeTaken: timeTaken });
  };
  onRadioChangeFour = (e) => {
    let timeTaken = this.distanceDestinationFour / e.target.value;
    timeTaken += this.state.timeTaken;
    this.setState({ timeTaken: timeTaken });
  };
  render() {
    return (
      <div className="flex-container">
        <div className="item item-1">
          <h1>Destination 1</h1>
          <select onChange={(e) => this.onSelectChange(e)}>
            {this.renderDestinationOne()}
          </select>
          <br />
          <div
            style={{ marginTop: "10px" }}
            onChange={(e) => this.onRadioChange(e)}
            ref={this.vechicleRef}
          >
            {renderVehicles(this.state.vehicleone)}
          </div>
        </div>
        <div className="item item-2">
          <h1>Destination 2</h1>
          {
            <select onChange={(e) => this.onSelectChangeTwo(e)}>
              {renderDestination(this.state.desttwo)}
            </select>
          }
          <div
            style={{ marginTop: "10px" }}
            onChange={(e) => this.onRadioChangeTwo(e)}
          >
            {renderVehicles(this.state.vehicletwo)}
          </div>
        </div>
        <div className="item item-3">
          <h1>Destination 3</h1>
          {
            <select onChange={(e) => this.onSelectChangeThree(e)}>
              {renderDestination(this.state.destthree)}
            </select>
          }
          <div
            style={{ marginTop: "10px" }}
            onChange={(e) => this.onRadioChangeThree(e)}
          >
            {renderVehicles(this.state.vehiclethree)}
          </div>
        </div>
        <div className="item item-3">
          <h1>Destination 4</h1>
          {
            <select onChange={(e) => this.onSelectChangeFour(e)}>
              {renderDestination(this.state.destfour)}
            </select>
          }
          <div
            style={{ marginTop: "10px" }}
            onChange={(e) => this.onRadioChangeFour(e)}
          >
            {renderVehicles(this.state.vehiclefour)}
          </div>
        </div>
        <div className="item item-4">
          <div>
            <label>Time Taken:{this.state.timeTaken}</label>
          </div>
        </div>
        <div className="break"></div>
        <div className="itemButton">
          <div>
            <label>Time Taken:{this.state.timeTaken}</label>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { planets: state.planets, vehicles: state.vehicles };
};

export default connect(mapStateToProps, { getPlanets, getVehicles })(Planets);
