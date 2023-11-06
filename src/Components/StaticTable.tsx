import React from 'react';

interface StatisticsTableProps {
  data: Record<string, number[]>;
  measureName: string;
}

const StatisticsTable: React.FC<StatisticsTableProps> = ({ data, measureName }) => {
  const calculateMean = (values: number[]) => {
    const sum = values.map((e)=>Number(e)).reduce((acc, val) => acc + val, 0);
    return (sum / values.length).toFixed(3);
  };

  const calculateMedian = (values: number[]) => {
    const sortedValues = values.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedValues.length / 2);
    if (sortedValues.length % 2 === 0) {
      const median = (sortedValues[middle - 1] + sortedValues[middle]) / 2;
      return median.toFixed(3);
    } else {
      return sortedValues[middle].toFixed(3);
    }
  };

  const calculateMode = (values: number[]) => {
    const valueCounts: Record<number, number> = {};
    values.forEach((value) => {
      valueCounts[value] = (valueCounts[value] || 0) + 1;
    });

    let mode: number | undefined;
    let maxCount = 0;
    for (const value in valueCounts) {
      if (valueCounts[value] > maxCount) {
        mode = parseFloat(value);
        maxCount = valueCounts[value];
      }
    }

    return mode !== undefined ? mode.toFixed(3) : 'N/A';
  };

  return (
    <table className="statistics-table"> 
    <thead>
      <tr>
        <th>Measure</th>
        {Object.keys(data).map((className) => (
          <th key={className}>Class {className}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{`${measureName} Mean` }</td>
        {Object.keys(data).map((className) => {
          const values = data[className];
          return (
            <td key={className}>
              {calculateMean(values)}
            </td>
          );
        })}
      </tr>
      <tr>
      <td>{`${measureName} Median` }</td>
        {Object.keys(data).map((className) => {
          const values = data[className];
          return (
            <td key={className}>
              {calculateMedian(values)}
            </td>
          );
        })}
      </tr>
      <tr>
      <td>{`${measureName} Mode` }</td>
        {Object.keys(data).map((className) => {
          const values = data[className];
          return (
            <td key={className}>
              {calculateMode(values)}
            </td>
          );
        })}
      </tr>
    </tbody>
  </table>
  );
};

export default StatisticsTable;
