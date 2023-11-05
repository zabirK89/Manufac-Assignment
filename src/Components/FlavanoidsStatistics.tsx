
import React from 'react';
import StatisticsTable from './StaticTable';

interface FlavanoidsStatisticsProps {
  data: Record<string, number[]>;
  measureName: string;
}

const FlavanoidsStatistics: React.FC<FlavanoidsStatisticsProps> = ({ data, measureName }) => {
  return (
    <StatisticsTable data={data} measureName={measureName} />
  );
};

export default FlavanoidsStatistics;
