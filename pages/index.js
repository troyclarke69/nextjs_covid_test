import Link from 'next/link';
// import Image from 'next/image';
import { Flex, Box, Text, Button, LinkOverlay } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import NumberFormat from 'react-number-format';
import { Stats } from '../components/Stats';
import { StatsExpand } from '../components/StatsExpand';

const Banner = ({ purpose }) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center'>
    {purpose}
  </Flex>
);
export default function Home({ countriesData, currentTime }) {
  // console.log('countriesData', countriesData);
  // console.log('dailyData', countriesData.data);
  // const currentTime = Date(Date.now);
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
  let new_deaths = 0;
  let people_fully_vaccinated = 0;
  let people_vaccinated = 0;
  let people_fully_vaccinated_per_hundred = 0;
  let people_vaccinated_per_hundred = 0;
  let new_vaccinations = 0;
  let total_boosters = 0;
  let total_boosters_per_hundred = 0;
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

    if (
      data[countries[j]].data[data[countries[j]].data.length - 1].new_cases !==
      undefined
    ) {
      new_cases =
        data[countries[j]].data[data[countries[j]].data.length - 1].new_cases;
    } else {
      new_cases = 0;
    }

    if (
      data[countries[j]].data[data[countries[j]].data.length - 1].new_deaths !==
      undefined
    ) {
      new_deaths =
        data[countries[j]].data[data[countries[j]].data.length - 1].new_deaths;
    } else {
      new_deaths = 0;
    }

    //reset...if vac data not found, will return 0 instead of undefined
    // let people_fully_vaccinated = 0;
    // let people_vaccinated = 0;
    // let people_fully_vaccinated_per_hundred = 0;
    // let people_vaccinated_per_hundred = 0;
    // let new_vaccinations = 0;
    // let total_boosters = 0;
    // let total_boosters_per_hundred = 0;

    // for (
    //   let k = data[countries[j]].data[data[countries[j]].data.length - 1];
    //   k >= data[countries[j]].data[data[countries[j]].data.length - 10];
    //   k--
    // ) {
    //   console.log(
    //     'len',
    //     data[countries[j]].data[data[countries[j]].data.length]
    //   );
    //   console.log('k', k);

    //   if (
    //     data[countries[j]].data[data[countries[j]].data.length] -
    //       data[countries[j]].data[data[countries[j]].data.length - k]
    //         .people_fully_vaccinated !==
    //     undefined
    //   ) {
    //     people_fully_vaccinated =
    //       data[countries[j]].data[data[countries[j]].data.length - k]
    //         .people_fully_vaccinated;

    //     people_vaccinated =
    //       data[countries[j]].data[data[countries[j]].data.length - k]
    //         .people_vaccinated;
    //     people_fully_vaccinated_per_hundred =
    //       data[countries[j]].data[data[countries[j]].data.length - k]
    //         .people_fully_vaccinated_per_hundred;
    //     people_vaccinated_per_hundred =
    //       data[countries[j]].data[data[countries[j]].data.length - k]
    //         .people_vaccinated_per_hundred;
    //     new_vaccinations =
    //       data[countries[j]].data[data[countries[j]].data.length - k]
    //         .new_vaccinations;
    //     total_boosters =
    //       data[countries[j]].data[data[countries[j]].data.length - k]
    //         .total_boosters;
    //     total_boosters_per_hundred =
    //       data[countries[j]].data[data[countries[j]].data.length - k]
    //         .total_boosters_per_hundred;

    //     break;
    //   }
    // }

    if (
      data[countries[j]].data[data[countries[j]].data.length - 1]
        .people_fully_vaccinated !== undefined
    ) {
      people_fully_vaccinated =
        data[countries[j]].data[data[countries[j]].data.length - 1]
          .people_fully_vaccinated;
    } else {
      people_fully_vaccinated = 0;
    }

    people_vaccinated =
      data[countries[j]].data[data[countries[j]].data.length - 1]
        .people_vaccinated;

    if (
      data[countries[j]].data[data[countries[j]].data.length - 1]
        .people_fully_vaccinated_per_hundred !== undefined
    ) {
      people_fully_vaccinated_per_hundred =
        data[countries[j]].data[data[countries[j]].data.length - 1]
          .people_fully_vaccinated_per_hundred;
    } else {
      people_fully_vaccinated_per_hundred = 0;
    }

    people_vaccinated_per_hundred =
      data[countries[j]].data[data[countries[j]].data.length - 1]
        .people_vaccinated_per_hundred;
    new_vaccinations =
      data[countries[j]].data[data[countries[j]].data.length - 1]
        .new_vaccinations;

    if (
      data[countries[j]].data[data[countries[j]].data.length - 1]
        .total_boosters !== undefined
    ) {
      total_boosters =
        data[countries[j]].data[data[countries[j]].data.length - 1]
          .total_boosters;
    } else {
      total_boosters = 0;
    }

    if (
      data[countries[j]].data[data[countries[j]].data.length - 1]
        .total_boosters_per_hundred !== undefined
    ) {
      total_boosters_per_hundred =
        data[countries[j]].data[data[countries[j]].data.length - 1]
          .total_boosters_per_hundred;
    } else {
      total_boosters_per_hundred = 0;
    }

    if (
      data[countries[j]].data[data[countries[j]].data.length - 1]
        .total_cases !== undefined
    ) {
      total_cases =
        data[countries[j]].data[data[countries[j]].data.length - 1].total_cases;
    } else {
      total_cases = 0;
    }

    if (
      data[countries[j]].data[data[countries[j]].data.length - 1]
        .total_deaths !== undefined
    ) {
      total_deaths =
        data[countries[j]].data[data[countries[j]].data.length - 1]
          .total_deaths;
    } else {
      total_deaths = 0;
    }

    let rowStats = {
      name: countries[j],
      location,
      life_expectancy,
      population,
      continent,
      new_cases,
      new_deaths,
      people_fully_vaccinated,
      people_fully_vaccinated_per_hundred,
      people_vaccinated,
      people_vaccinated_per_hundred,
      new_vaccinations,
      total_boosters,
      total_boosters_per_hundred,
      data: data[countries[j]].data,
      total_cases,
      total_deaths,
    };
    vacStats.push(rowStats);
  }

  vacStats
    .sort(function (a, b) {
      // return Number(a['life_expectancy']) - Number(b['life_expectancy']);
      return (
        Number(a['people_fully_vaccinated_per_hundred']) -
        Number(b['people_fully_vaccinated_per_hundred'])
      );
    })
    .reverse();
  // console.log('stats', vacStats);

  return (
    <div style={{ margin: '1rem' }}>
      <h5>Last Updated: {currentTime}</h5>

      <Stats stats={vacStats} />

      {/* Accordion is very slow!!?? */}
      {/* <StatsExpand stats={vacStats} /> */}

      {/* <ul style={{ listStyle: 'none', paddingBottom: '2px' }}>
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
                >
                  <span
                    title={'Find this place on Google Maps'}
                    style={{
                      backgroundColor: '#203040',
                      color: 'white',
                      padding: '5px',
                      borderRadius: '10%',
                      fontWeight: 'bold',
                    }}
                  >
                    {country.location}
                  </span>
                </a>
              </Link>
              {'      '}
              <em>({country.continent})</em>

              <div style={{ paddingLeft: '2rem' }}>
                <h3
                  title={`Fully Vaccinated: ${country.people_fully_vaccinated}`}
                >
                  Fully Vaccinated:{'  '}
                  <NumberFormat
                    value={country.people_fully_vaccinated_per_hundred}
                    displayType={'text'}
                    thousandSeparator=','
                  />
                  {'%'}
                </h3>
                <h4 title={`Boosted: ${country.total_boosters}`}>
                  Boosted:{' '}
                  <NumberFormat
                    value={country.total_boosters_per_hundred}
                    displayType={'text'}
                    thousandSeparator=','
                  />
                  {'%'}
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
                <h4>
                  Todays Cases:{' '}
                  <NumberFormat
                    value={country.new_cases}
                    displayType={'text'}
                    thousandSeparator=','
                  />
                </h4>
                <h4>
                  Todays Deaths:{' '}
                  <NumberFormat
                    value={country.new_deaths}
                    displayType={'text'}
                    thousandSeparator=','
                  />
                </h4>
                <h4>
                  Population:{' '}
                  <NumberFormat
                    value={country.population}
                    displayType={'text'}
                    thousandSeparator=','
                  />
                </h4>
                <h4>
                  Life Expectancy:{' '}
                  {country.life_expectancy === 0
                    ? 'n/a'
                    : country.life_expectancy}
                </h4>
                <div style={{ margin: '10px' }} />
              </div>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}

// export async function getStaticProps() {
//   const countriesData = await fetchApi(`${baseUrl}`);
//   const currentTime = Date(Date.now);

//   return {
//     props: {
//       countriesData,
//       currentTime,
//     },
//   };
// }

export async function getServerSideProps() {
  const countriesData = await fetchApi(`${baseUrl}`);
  const currentTime = Date(Date.now);

  return {
    props: {
      countriesData,
      currentTime,
    },
  };
}
