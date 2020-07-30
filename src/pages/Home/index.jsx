import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import APIManager from 'services/APIManager';
import CountriesDropDown from 'components/Dropdown';
import Summary from 'components/Summary';
import { Container, Div, Row, Col, Text } from 'atomize';

import {
  setRevenuesAll,
  setAvgRevenuesAll,
  setNumberCustomersAll,
} from '../../redux';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const allRevenues = async () => {
      const res = await APIManager.allRevenues();
      console.log('Home -> res', res);
      dispatch(setRevenuesAll(res.revenues));
    };
    const avgRevenues = async () => {
      const res = await APIManager.avgRevenuesAll();
      console.log('Home -> res', res);
      dispatch(setAvgRevenuesAll(res.avgRevenues));
    };
    const customers = async () => {
      const res = await APIManager.numberCustomers();
      console.log('Home -> res', res);
      dispatch(setNumberCustomersAll(res.customers));
    };
    allRevenues();
    avgRevenues();
    customers();
  }, [dispatch]);

  return (
    <>
      <Container>
        <Div>
          <Row d="flex" w="50%" justify="space-around" align="center">
            <Text tag="h3">COUNTRY</Text>
            <CountriesDropDown />
          </Row>
        </Div>
        <Div>
          <Col>
            <Text tag="h3">SUMMARY</Text>
            <Row>
              <Summary />
            </Row>
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
