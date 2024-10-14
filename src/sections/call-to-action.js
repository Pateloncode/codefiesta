import React from 'react';
import { Box, Container, Flex, Text, Heading, Image, Button } from 'theme-ui';
// import { Link } from 'components/link';

// import callImage from 'assets/images/call-image.png';

// const CallToAction = () => {
//   return (
//     <Box as="section" sx={styles.callToAction}>
//       <Container>
//         <Flex sx={styles.flex}>
//           <Box sx={styles.content}>
//             <Text as="span">🚨Hurry Up! Very Few Seats Left | Register Fast!🚨</Text>
//             <Heading as="h3">
//             🚀 Join  Coding Ninjas' most awaited workshop – "Freshman Induction: The First Step Towards Success"
//             </Heading>
//             <Text as="p">
//             In collaboration with <span className='font-bold'>CodeFiesta, SKIT Jaipur!</span>
//             Don't miss out on this incredible opportunity to kickstart your engineering journey with guidance from industry experts! 📚
//             </Text>
//             <Button sx={styles.button} as="a" href="https://tinyurl.com/fdswjxen">
//               Register Now
//             </Button>
//           </Box>
//           <Box sx={styles.images}>
//             <Image src={"https://firebasestorage.googleapis.com/v0/b/something-424ae.appspot.com/o/WhatsApp%20Image%202024-09-22%20at%2012.37.32.jpeg?alt=media&token=33a01b66-31d5-4e57-a1b1-2eaa2d3c7220"} alt="call image" />
//           </Box>
//         </Flex>
//       </Container>
//     </Box>
//   );
// };

const CallToAction =() =>{
  return null;
};

export default CallToAction;

const styles = {
  callToAction: {
    mt: ['-90px', null, null, null, '0'],
    py: ['50px', null, null, null, '110px', null, '140px'],
  },
  flex: {
    flexWrap: 'wrap',
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 38.5%'],
    textAlign: ['center', null, null, null, 'left'],
    pt: ['80px', null, null, null, '0'],
    maxWidth: ['100%', null, null, '80%', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['30px', null, null, null, '0'],
    span: {
      fontSize: '18px',
      fontWeight: 700,
      color: 'primary',
      display: 'block',
      lineHeight: 1,
    },
    h3: {
      color: '#0F2137',
      fontWeight: 800,
      fontSize: ['18px', null, null, null, '30px', '36px', '44px'], // Responsive font size
      maxWidth: ['100%', null, null, null, null, '90%', '100%'], // Controls width at different breakpoints
      lineHeight: 1.36,
      letterSpacing: '-1.5px',
      mt: '20px',
      mb: '30px',
      textAlign: 'center', // Aligns the text to the center
      mx: 'auto', // Centers the element horizontally (auto margin)
      width: '100%', // Ensures full width
    },
    
    p: {
      color: '#02073E',
      fontSize: ['16px', null, null, '18px'],
      lineHeight: ['2', null, null, 2.33],
      mb: '30px',
    },
  },
  button: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    padding: '6.5px 19px',
    letterSpacing: '-0.16px',
    transition: 'all 500ms ease',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.8,
    },
  },
  images: {
    flex: ['0 0 100%', null, null, null, '0 0 61.5%'],
  },
};
