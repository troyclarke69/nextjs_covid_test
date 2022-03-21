import Head from 'next/head';
import { Box } from '@chakra-ui/react';

// import Footer from './Footer';
// import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Covid19</title>
      </Head>
      <Box maxWidth='1280px' m='auto'>
        <header
          style={{
            backgroundColor: '#203040',
            color: '#d8d8d8',
            padding: '1rem',
          }}
        >
          Covid19
        </header>
        <main>{children}</main>
        <footer
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#203040',
            color: '#d8d8d8',
            padding: '1rem',
          }}
        >
          Covid19 &copy; 2022 All rights reserved.
        </footer>
      </Box>
    </>
  );
}
