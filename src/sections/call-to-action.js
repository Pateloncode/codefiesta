import React from 'react';
import { Box, Container, Flex, Text, Heading, Image } from 'theme-ui';
<<<<<<< HEAD
=======


>>>>>>> 9535727bd4a9ca576e2e4dcfac7029dd0d4ffd93

// Commented-out component code
// const CallToAction = () => {
//   return (
//     <Box as="section" sx={styles.callToAction}>
//       <Container>
//         <Flex sx={styles.flex}>
//           <Box sx={styles.content}>
//             <Text as="span">BYTE-CHASE: The Treasure Adventure!</Text>
//             <Heading as="h3">Join us for</Heading>
//             <Heading as="h4">
//               ByteChase – not your average treasure hunt, but an exhilarating Treasure Adventure!!
//             </Heading>
//             <Text as="p">
//               Your mission? Scan, Decode, strategize across campus and claim the ByteChase Victory.
//             </Text>
//             <a
//               href="https://erp.skit.ac.in/register/r/Pravah24ByteChs"
//               style={styles.button}
//             >
//               Register Now
//             </a>
//             <a
//               href="https://pdfhost.io/v/HDDluFuNQ_ByteChase_The_Treasure_Adventure"
//               style={styles.button}
//             >
//               Download
//             </a>
//           </Box>
//           <Box sx={styles.images}>
//             <Image
//               src="https://firebasestorage.googleapis.com/v0/b/something-424ae.appspot.com/o/call-image.png?alt=media&token=dd5f5dbc-1d64-4fe7-96a9-c609a025f7f9"
//               alt="call image"
//             />
//           </Box>
//         </Flex>
//       </Container>
//     </Box>
//   );
// };

// Create a placeholder component that does nothing
const CallToAction = () => {
<<<<<<< HEAD
  return null; // This ensures the component renders nothing without causing an error
=======
  return (
    <Box as="section" sx={styles.callToAction}>
      <Container>
        <Flex sx={styles.flex}>
          <Box sx={styles.content}>
            <Text as="span">BYTE-CHASE: The Treasure Adventure! </Text>
            <Heading as="h3">
            Join us for
            </Heading>
            

            <Heading as="h4">
            ByteChase – not your average treasure hunt, but an exhilarating Treasure Adventure!!
            </Heading>
            <Text as="p">
              Your mission?
              Scan, Decode, strategize across campus and claim the ByteChase Victory.
            </Text>
            

            <a href="https://erp.skit.ac.in/register/r/Pravah24ByteChs" style={styles.button}>
  Register Now
</a>
<a href="https://pdfhost.io/v/HDDluFuNQ_ByteChase_The_Treasure_Adventure" style={styles.button}>
  Download
</a>


            

{/* 
            {<Link path="https://firebasestorage.googleapis.com/v0/b/something-424ae.appspot.com/o/ByteChase%20The%20Treasure%20Adventure.pdf?alt=media&token=7abe3344-e8ac-4f84-8382-9d41afc95092" sx={styles.button}>
            <a href="https://firebasestorage.googleapis.com/v0/b/something-424ae.appspot.com/o/ByteChase%20The%20Treasure%20Adventure.pdf?alt=media&token=7abe3344-e8ac-4f84-8382-9d41afc95092" >
              DOWNLOAD
              </a>

           
            </Link> */}
           
          </Box>
          <Box sx={styles.images}>
            <Image src={'https://firebasestorage.googleapis.com/v0/b/something-424ae.appspot.com/o/call-image.png?alt=media&token=dd5f5dbc-1d64-4fe7-96a9-c609a025f7f9'} alt="call image" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
>>>>>>> 9535727bd4a9ca576e2e4dcfac7029dd0d4ffd93
};

export default CallToAction;

// Commented-out styles object
// const styles = {
//   callToAction: {
//     mt: ['-90px', null, null, null, '0'],
//     py: ['50px', null, null, null, '110px', null, '140px'],
//   },
//   flex: {
//     flexWrap: 'wrap',
//   },
//   content: {
//     flex: ['0 0 100%', null, null, null, '0 0 38.5%'],
//     textAlign: ['center', null, null, null, 'left'],
//     pt: ['80px', null, null, null, '0'],
//     maxWidth: ['100%', null, null, '80%', '100%'],
//     mx: ['auto', null, null, null, '0'],
//     mb: ['30px', null, null, null, '0'],
//     span: {
//       fontSize: '18px',
//       fontWeight: 700,
//       color: 'primary',
//       display: 'block',
//       lineHeight: 1,
//     },
//     h3: {
//       color: '#0F2137',
//       fontWeight: 700,
//       fontSize: ['23px', null, null, null, '30px', '36px', '44px'],
//       maxWidth: ['100%', null, null, null, null, '90%', '100%'],
//       lineHeight: 1.36,
//       letterSpacing: '-1.5px',
//       mt: '20px',
//       mb: '5px',
//     },
//     h4: {
//       color: '#0F2137',
//       fontWeight: 700,
//       fontSize: ['23px', null, null, null, '30px', '36px', '44px'],
//       maxWidth: ['100%', null, null, null, null, '90%', '100%'],
//       lineHeight: 1.36,
//       letterSpacing: '-1.5px',
//       mt: '5px',
//       mb: '30px',
//     },
//     p: {
//       color: '#02073E',
//       fontSize: ['16px', null, null, '18px'],
//       lineHeight: ['2', null, null, 2.33],
//       mb: '20px',
//     },
//   },
//   button: {
//     display: 'inline-block',
//     padding: '10px 20px',
//     marginRight: '10px',
//     textDecoration: 'none',
//     verticalAlign: 'middle',
//     backgroundColor: '#0000cd', //'#02073E',
//     color: '#fff',
//     borderRadius: '5px',
//     fontSize: '16px',
//     fontWeight: 700,
//     p: '6.5px 19px',
//     letterSpacing: '-0.16px',
//     cursor: 'pointer',
//     transition: 'background-color 0.8s ease',
//   },
//   images: {
//     flex: ['0 0 100%', null, null, null, '0 0 61.5%'],
//   },
// };
