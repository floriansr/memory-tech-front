import React from 'react';
import { Card, Col } from 'antd';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import NumberFormat from 'react-number-format';

const Summary = () => {
  const { revenues, avgRevenues, customers } = useSelector(
    (state) => state.transaction
  );

  return (
    <>
      <Col span={8}>
        <Card title="Revenue">
          {revenues === 0 ? (
            <Loader type="ThreeDots" color="#00BFFF" height={50} width={40} />
          ) : (
            <NumberFormat
              value={revenues}
              displayType="text"
              thousandSeparator
              prefix="$"
            />
          )}
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Avg Revenue By Order">
          {avgRevenues === 0 ? (
            <Loader type="ThreeDots" color="#00BFFF" height={50} width={40} />
          ) : (
            <NumberFormat
              value={avgRevenues}
              displayType="text"
              thousandSeparator
              prefix="$"
            />
          )}
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Customers">
          {customers === 0 ? (
            <Loader type="ThreeDots" color="#00BFFF" height={50} width={40} />
          ) : (
            <NumberFormat
              value={customers}
              displayType="text"
              thousandSeparator
            />
          )}
        </Card>
      </Col>
    </>
  );
};

export default Summary;
