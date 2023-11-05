import React from 'react';
import StatisticsTable from './StaticTable';

interface GammaStatisticsProps {
  data: Record<string, number[]>;
  measureName: string;
}

const GammaStatistics: React.FC<GammaStatisticsProps> = ({ data, measureName }) => {

  return (
    <StatisticsTable data={data} measureName={measureName} />
  );
};

export default GammaStatistics;
