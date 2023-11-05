import React, { useEffect, useState } from 'react';
import './App.css';
import wineData from './data.json';
import FlavanoidsStatistics from './Components/FlavanoidsStatistics';
import GammaStatistics from './Components/GammaStatistics';

const App: React.FC = () => {
  const [flavanoidsData, setFlavanoidsData] = useState<Record<string, number[]>>({});
  const [gammaData, setGammaData] = useState<Record<string, number[]>>({});

  useEffect(() => {

    const initialFlavanoidsData: Record<string, number[]> = {};
    const initialGammaData: Record<string, number[]> = {};

    wineData.forEach((wine) => {
      const className = `Class ${wine.Alcohol}`;
      initialFlavanoidsData[className] = initialFlavanoidsData[className] || [];
      initialGammaData[className] = initialGammaData[className] || [];
      initialFlavanoidsData[className].push(wine.Flavanoids as any);

      const gamma = (wine.Ash as any * wine.Hue) / wine.Magnesium;
      initialGammaData[className].push(gamma);
    });

    setFlavanoidsData(initialFlavanoidsData);
    setGammaData(initialGammaData);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wine Dataset Statistics</h1>
        <div className="statistics-container">
          <div className="statistics-section">
            <h2>Flavanoids Statistics</h2>
            <FlavanoidsStatistics data={flavanoidsData} measureName="Flavanoids" />
          </div>
          <div className="statistics-section">
            <h2>Gamma Statistics</h2>
            <GammaStatistics data={gammaData} measureName="Gamma" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;