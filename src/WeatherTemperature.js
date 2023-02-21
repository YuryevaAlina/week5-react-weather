import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemparature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit mt-6">°C</span>
    </div>
  );
}
