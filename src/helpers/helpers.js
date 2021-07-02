export function renderDestination(remainingPlanet) {
  if (remainingPlanet.length > 0) {
    return remainingPlanet.map((planet) => {
      return (
        <option value={planet.distance} key={planet.distance}>
          {planet.name}
        </option>
      );
    });
  }
}

export function renderVehicles(remainingVehicle) {
  if (remainingVehicle.length > 0) {
    return remainingVehicle.map((vehicle) => {
      return (
        <div key={vehicle.max_distance}>
          <input type="radio" name={vehicle.group} value={vehicle.speed} />
          <label style={{ paddingLeft: "10px" }}>
            {vehicle.name}({vehicle.total_no})
          </label>
        </div>
      );
    });
  }
}
