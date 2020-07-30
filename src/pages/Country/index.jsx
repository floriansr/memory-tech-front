import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import APIManager from 'services/APIManager';
import CountriesDropDown from 'components/Dropdown';
import Summary from 'components/Summary';
import { Container, Div, Row, Col, Text } from 'atomize';

import {
  setRevenuesAll,
  setAvgRevenuesAll,
  setNumberCustomersAll,
  setCountries,
} from '../../redux';

const Country = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    const oneCountry = async () => {
      const res = await APIManager.oneCountry(slug);
      dispatch(setRevenuesAll(res.revenues));
      dispatch(setAvgRevenuesAll(res.avg_revenues));
      dispatch(setNumberCustomersAll(res.customers));
      dispatch(setCountries(res.countries));
    };

    oneCountry();
  }, [dispatch, slug]);

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

export default Country;
