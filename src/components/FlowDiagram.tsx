"use client";

import React from 'react';
import './FlowDiagram.css';

const FlowDiagram = () => {
  return (
    <div className="flow-diagram">
      <div className="flow-step">Stap 1: Registreren</div>
      <div className="flow-step">Stap 2: Instellingen</div>
      <div className="flow-step">Stap 3: Bericht versturen</div>
    </div>
  );
};

export default FlowDiagram;