import Link from 'next/Link';
// import Image from 'next/Image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import NumberFormat from 'react-number-format';

const Banner = ({ purpose }) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center'>
    {purpose}
  </Flex>
);
export default function Home({ countriesData }) {
  console.log('countriesData', countriesData);
  // console.log('dailyData', countriesData.data);

  const data = countriesData;
  let vacStats = [];
  let countries = [];
  let keys = Object.keys(data);

  for (var i = 0; i < keys.length; i++) {
    if (keys[i].substring(0, 4) !== 'OWID') countries.push(keys[i]);
  }

  let location = '';
  let life_expectancy = 0;
  let population = '';
  let continent = '';
  let new_cases = 0;
  let people_fully_vaccinated = 0;
  let people_vaccinated = 0;
  let people_fully_vaccinated_per_hundred = 0;
  let people_vaccinated_per_hundred = 0;
  let new_vaccinations = 0;
  let total_cases = 0;
  let total_deaths = 0;

  for (var j = 0; j < countries.length; j++) {
    location = data[countries[j]].location;
    if (data[countries[j]]?.life_expectancy !== undefined) {
      life_expectancy = data[countries[j]]?.life_expectancy;
    } else {
      life_expectancy = 0;
    }
    population = data[countries[j]].population;
    continent = data[countries[j]].continent;
    new_cases =
      data[countries[j]].data[data[countries[j]].data.length - 1].new_cases;
    people_fully_vaccinated =
      data[countries[j]].data[data[countries[j]].data.length - 1]
        .people_fully_vaccinated;
    people_vaccinated =
      data[countries[j]].data[data[countries[j]].data.length - 1]
        .people_vaccinated;
    people_fully_vaccinated_per_hundred =
      data[countries[j]].data[data[countries[j]].data.length - 1]
        .people_fully_vaccinated_per_hundred;
    people_vaccinated_per_hundred =
      data[countries[j]].data[data[countries[j]].data.length - 1]
        .people_vaccinated_per_hundred;
    new_vaccinations =
      data[countries[j]].data[data[countries[j]].data.length - 1]
        .new_vaccinations;
    total_cases =
      data[countries[j]].data[data[countries[j]].data.length - 1].total_cases;
    total_deaths =
      data[countries[j]].data[data[countries[j]].data.length - 1].total_deaths;

    let rowStats = {
      name: countries[j],
      location,
      life_expectancy,
      population,
      continent,
      new_cases,
      people_fully_vaccinated,
      people_fully_vaccinated_per_hundred,
      people_vaccinated,
      people_vaccinated_per_hundred,
      new_vaccinations,
      data: data[countries[j]].data,
      total_cases,
      total_deaths,
    };
    vacStats.push(rowStats);
  }

  // console.log('vacStats', vacStats);

  // this is sorting the orig array (vacStats) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!?
  vacStats
    .sort(function (a, b) {
      return Number(a['life_expectancy']) - Number(b['life_expectancy']);
    })
    .reverse();

  // console.log('vacsSorted', vacsSorted);

  return (
    <div style={{ margin: '1rem' }}>
      <h2></h2>
      <ul style={{ listStyle: 'none' }}>
        {vacStats?.map((country, i) => {
          return (
            <li key={country.location}>
              {i + 1}
              {'.  '}
              <Link
                href={`https://www.google.com/maps/place/${country.location}`}
                target='_blank'
                rel='noreferrer'
              >
                <a
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: 'underline', color: 'blue' }}
                >
                  {country.location}:
                </a>
              </Link>
              {'      '}
              <em>Life Expectancy: {country.life_expectancy}</em>

              <div style={{ paddingLeft: '2rem' }}>
                <h4>Continent: {country.continent}</h4>

                <h4>
                  Population:{' '}
                  <NumberFormat
                    value={country.population}
                    displayType={'text'}
                    thousandSeparator=','
                  />
                </h4>

                <h4>
                  Total Cases:{' '}
                  <NumberFormat
                    value={country.total_cases}
                    displayType={'text'}
                    thousandSeparator=','
                  />
                </h4>
                <h4>
                  Total Deaths:{' '}
                  <NumberFormat
                    value={country.total_deaths}
                    displayType={'text'}
                    thousandSeparator=','
                  />
                </h4>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );

  // return (
  //   <div>
  //     <h1>Hello!</h1>
  //   </div>
  // );
}

export async function getStaticProps() {
  const countriesData = await fetchApi(`${baseUrl}`);

  return {
    props: {
      countriesData,
    },
  };
}
