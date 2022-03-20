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
        <header>This is a test, only a test ...</header>
        <main>{children}</main>
        <footer>This concludes the test. Thank you.</footer>
      </Box>
    </>
  );
}
