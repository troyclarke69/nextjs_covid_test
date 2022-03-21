import React from 'react';
import NumberFormat from 'react-number-format';
import millify from 'millify';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';

{
  /* <NumberFormat
  displayType={'text'}
  decimalSeparator='.'
  decimalScale='3'
  value={deaths / cases}
/>; */
}

export const Stats = ({ stats }) => {
  // const {
  //   location,
  //   continent,
  //   people_fully_vaccinated,
  //   people_fully_vaccinated_per_hundred,
  //   total_boosters,
  //   total_boosters_per_hundred,
  //   total_cases,
  //   total_deaths,
  //   new_cases,
  //   new_deaths,
  //   population,
  //   life_expectancy,
  // } = stats;
  return (
    <Table variant='striped' colorScheme='gray'>
      <TableCaption placement='top'>
        Covid19 Stats, by Vaccination Rate
      </TableCaption>
      <Thead>
        <Tr>
          <Th>Rank</Th>
          <Th>Location</Th>
          <Th>
            Vaccinated
            <br />
            (%)
          </Th>

          {/* <Th>Pop.</Th> */}
          <Th>
            Boosted
            <br />
            (%)
          </Th>
          <Th>
            Total <br />
            Cases|Deaths
          </Th>
          <Th>
            Today&apos;s
            <br /> Cases|Deaths
          </Th>
        </Tr>
        {/* <Tr>
          <Th></Th>
          <Th>Total Cases</Th>
          <Th>Total Deaths</Th>
          <Th>Cases Today</Th>
          <Th>Deaths Today</Th>
        </Tr> */}
      </Thead>
      <Tbody>
        {stats.map((stat, i) => (
          <>
            <Tr key={i}>
              <Td>{i + 1}</Td>
              <Td>
                <a
                  href={`https://www.google.com/maps/place/${stat.location}`}
                  target='_blank'
                  rel='noreferrer'
                  // style={{ textDecoration: 'underline', color: 'blue' }}
                >
                  <span
                    title={'Find this place on Google Maps'}
                    style={{
                      backgroundColor: 'rgba(20,30,40,.25)',
                      color: 'white',
                      padding: '5px',
                      borderRadius: '10%',
                      fontWeight: 'bold',
                    }}
                  >
                    {stat.location}
                  </span>
                </a>
                <br />
                <em style={{ fontSize: '.8rem' }}>
                  ({stat.continent}){' '}
                  <small>
                    pop.{' '}
                    <NumberFormat
                      value={stat.population}
                      displayType={'text'}
                      thousandSeparator=','
                    />
                  </small>
                </em>
              </Td>
              <Td
                title={`Fully Vaccinated: ${millify(
                  stat.people_fully_vaccinated
                )}`}
              >
                <strong>{stat.people_fully_vaccinated_per_hundred}</strong>
              </Td>

              {/* <Td
                title={`Life Expectancy: ${
                  stat.life_expectancy === 0 ? 'n/a' : stat.life_expectancy
                }`}
              >
                {' '}
                <NumberFormat
                  value={stat.population}
                  displayType={'text'}
                  thousandSeparator=','
                />
              </Td> */}
              <Td title={`Boosted: ${millify(stat.total_boosters)}`}>
                {stat.total_boosters_per_hundred}
              </Td>

              <Td
                title={`Case %: ${Math.round(
                  (stat.total_cases / stat.population) * 100
                )} |
                  Death %: ${Math.round(
                    (stat.total_deaths / stat.total_cases) * 100
                  )}
                `}
              >
                <NumberFormat
                  value={stat.total_cases}
                  displayType={'text'}
                  thousandSeparator=','
                />
                {' | '}
                <NumberFormat
                  value={stat.total_deaths}
                  displayType={'text'}
                  thousandSeparator=','
                />
              </Td>
              {(stat.new_cases / stat.population) * 100 > 0.2 ? (
                <Td
                  title={`Daily Case rise: ${(
                    (stat.new_cases / stat.population) *
                    100
                  ).toFixed(3)}% of population`}
                  style={{
                    // backgroundColor: '#99a88c',
                    color: 'red',
                    fontWeight: 'bold',
                    // borderRadius: '100%',
                  }}
                >
                  <NumberFormat
                    value={stat.new_cases}
                    displayType={'text'}
                    thousandSeparator=','
                  />
                  {' | '}
                  <NumberFormat
                    value={stat.new_deaths}
                    displayType={'text'}
                    thousandSeparator=','
                  />
                </Td>
              ) : (
                <Td
                  title={`Daily rise: ${(
                    (stat.new_cases / stat.population) *
                    100
                  ).toFixed(3)}% of population`}
                >
                  <NumberFormat
                    value={stat.new_cases}
                    displayType={'text'}
                    thousandSeparator=','
                  />
                  {' | '}
                  <NumberFormat
                    value={stat.new_deaths}
                    displayType={'text'}
                    thousandSeparator=','
                  />
                </Td>
              )}
            </Tr>
            {/* <Tr>
              <Td></Td>
              <Td>Total cases</Td>
              <Td>Total deaths</Td>
              <Td>Cases Today</Td>
              <Td>Deaths Today</Td>
            </Tr> */}
          </>
        ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Rank</Th>
          <Th>Location</Th>
          <Th>
            Vaccinated
            <br />
            (%)
          </Th>

          {/* <Th>Pop.</Th> */}
          <Th>
            Boosted
            <br />
            (%)
          </Th>
          <Th>Total Cases|Deaths</Th>
          <Th>Today&apos;s Cases|Deaths</Th>
        </Tr>
        {/* <Tr>
          <Th></Th>
          <Th>Total Cases</Th>
          <Th>Total Deaths</Th>
          <Th>Cases Today</Th>
          <Th>Deaths Today</Th>
        </Tr> */}
      </Tfoot>
    </Table>
  );
};
