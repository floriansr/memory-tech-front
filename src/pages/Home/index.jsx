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
    const allCountries = async () => {
      const res = await APIManager.allCountries();
      console.log('Home -> res', res);
      dispatch(setRevenuesAll(res.revenues));
      dispatch(setAvgRevenuesAll(res.avg_revenues));
      dispatch(setNumberCustomersAll(res.customers));
    };

    allCountries();
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
