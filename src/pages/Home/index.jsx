import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import APIManager from 'services/APIManager';
import { Container, Div, Row, Col, Text } from 'atomize';

import { setTransactions } from '../../redux';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const allRevenues = async () => {
      const res = await APIManager.allRevenues();
      console.log('Home -> res', res);
      dispatch(setTransactions(res.revenues));
    };
    allRevenues();
  }, [dispatch]);

  return (
    <>
      <Container>
        <Div>
          <Row>
            <Text tag="h3">COUNTRY</Text>
          </Row>
        </Div>
        <Div>
          <Col>
            <Text tag="h3">SUMMARY</Text>
          </Col>
        </Div>
        <Div>
          <Col>
            <Text tag="h3">REVENUE PER MONTH</Text>
          </Col>
        </Div>
      </Container>
    </>
  );
};

export default Home;
