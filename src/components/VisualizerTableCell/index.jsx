import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { useSelector } from 'react-redux';

const VisualizerTableCell = () => {
  const { datetime } = useSelector((state) => state.transaction);

  return (
    <>
      <BarChart width={600} height={400} data={datetime}>
        <XAxis dataKey="date" />
        <YAxis />
        <Bar dataKey="amount" barSize={30} fill="#8884d8" />
      </BarChart>
    </>
  );
};

export default VisualizerTableCell;
