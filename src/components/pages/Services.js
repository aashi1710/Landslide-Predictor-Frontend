import React from 'react';
import '../../App.css';


export default function Services() {
  
  return (
   <> 
   <div className="services">
    <div className="first">
    <a className="l" href="https://1271b47d-50e4-44aa.gradio.live/" target="_blank" style={{ color: 'brown'}}>
      NAVIGATE LANDSLIDE!</a>
    <ul>
      <li>Click 'Navigate landslide'</li>
      <li>Select the checkbox 'Detect'</li>
      <li>Click Submit</li>
      <li>Detect landslides!</li>
    </ul>
  </div>
  
  <div className="2">
    <a className="r" href="https://a08944fb-79c6-4d5f.gradio.live/" target="_blank" style={{ color: 'gold'}}>RAINFALL TODAY!</a>
    <ul >
      <li>Click 'Rainfall Today'</li>
      <li>Set optimal input values</li>
      <li>Click Submit</li>
      <li>Forecast rain in your city!</li>
    </ul>
  </div>
  </div>
   </> 
  );
}
