/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Heading, Text, Box, Container, Button, Image, Link } from 'theme-ui';
import { rgba } from 'polished';
import { keyframes } from '@emotion/core';
import SectionHeading from 'components/section-heading';
import illustration from 'assets/images/banner-illustration2.png';
import logoImage from 'assets/images/banner/banner-logo.png';
import bannerIcon1 from 'assets/images/banner/banner-icon-1-1.svg';
import bannerIcon2 from 'assets/images/banner/banner-icon-1-2.svg';
import bannerIcon3 from 'assets/images/banner/banner-icon-1-3.svg';
import bannerIcon4 from 'assets/images/banner/banner-icon-1-4.svg';

const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container sx={styles.container}>
        <Image
          sx={styles.bannerIcon1}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon1}
        />
        <Image
          sx={styles.bannerIcon2}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon2}
        />
        <Image
          sx={styles.bannerIcon3}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon3}
        />
        <Image
          sx={styles.bannerIcon4}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon4}
        />
        <Box sx={styles.contentWrapper}>
          <Image sx={styles.logo} src={logoImage} alt="logo image" />
          <Box sx={styles.bannerHeading.heading} >
            <Heading sx={styles.bannerHeading.title}>{"CodeFiesta - SKIT"}</Heading>
            <Text as="p" sx={styles.bannerHeading.description}>
              {"Swami Keshvanand Institute Of Technology Management & Gramothan, Jaipur"}
            </Text>
          </Box>
          <Box as="figure" sx={styles.illustration}>
            <Box sx={styles.buttonWrapper}>
              <Link href="https://chat.whatsapp.com/KiGESE0aFEf28NiRLG9rM5" target="_blank"><Button>Join Us</Button></Link>
              {/* https://gdsc.community.dev/accounts/login/?next=/swami-keshvanand-institute-of-technology-management-gramothan-jaipur/ */}
            </Box>
            {/* https://dscskit.page.link/Whatsapp */}
            <Image src={illustration} alt="illustration" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const bannerAnim1 = keyframes`
    0% {
        transform: rotate3d(0, 1, 0, 0deg);
    }

    30% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    60% {
        transform: rotate3d(1, 0, 0, 0deg);
    }

    80% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    100% {
        transform: rotate3d(0, 1, 0, 0deg);
    }
`;

const bannerAnim2 = keyframes`
    0% {
        transform: translateY(0px) translateX(0) rotate(0);
    }

    30% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: center center;
    }

    50% {
        transform: translateY(50px) translateX(50px) rotate(45deg);
        transform-origin: right bottom;
    }

    80% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: left top;
    }

    100% {
        transform: translateY(0px) translateX(0) rotate(0);
        transform-origin: center center;
    }
`;

const bannerAnim3 = keyframes`
    0%,
    100% {
        transform: perspective(400px) translateY(0) rotate(0deg) translateZ(0px) translateX(0);
    }

    50% {
        transform: perspective(400px) rotate(-45deg) translateZ(20px) translateY(20px) translateX(20px);
    }
`;

const styles = {
  container: {
    position: 'relative',
    '.bannerIcon': {
      position: 'absolute',
      display: ['none', null, null, null, 'block'],
    },
  },
  logo: {
    display: 'block',
    borderRadius: '50%',
    mx: 'auto',
    boxShadow: '0px 15px 35px rgba(65, 104, 139, 0.12)',
  },
  section: {
    position: 'relative',
    overflow: 'hidden',
    pt: [105, null, null, 140, 15, null, 170],
    pb: [8, null, null, 0],
    zIndex: 0,
    ':before': {
      backgroundColor: rgba('#E3F2FD', 0.5),
      content: ['none', null, null, `''`],
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 72,
      zIndex: -1,
    },
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  heading: {
    mb: [30],
    maxWidth: [null, null, null, 500, 660, 780],
    h2: {
      fontSize: [8, null, null, 8, 9, 10, 11],
      lineHeight: [1.57],
    },
    p: {
      fontSize: [1, null, null, 4],
      lineHeight: [1.87, null, null, 2.33],
    },
  },
  illustration: {
    display: ['block', null, null, 'flex'],
    position: 'relative',
    img: {
      display: 'block',
      maxWidth: ['90%'],
      m: ['0 auto'],
    },
  },
  buttonWrapper: {
    textAlign: ['center'],
    position: ['static', null, null, 'absolute'],
    left: '50%',
    top: 0,
    transform: ['unset', null, null, 'translateX(-50%)'],
  },
  bannerIcon1: {
    top: '5%',
    left: '5%',
    size: '80px',
    animation: `${bannerAnim2} 5s linear infinite`,
  },
  bannerIcon2: {
    top: '5%',
    right: '8%',
    size: '100px',
    animation: `${bannerAnim2} 5s linear infinite`,
  },
  bannerIcon3: {
    bottom: '40px',
    right: '-70px',
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon4: {
    bottom: '130px',
    left: '-50px',
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon5: {
    bottom: '50%',
    left: '15%',
  },
  bannerIcon6: {
    bottom: '-65px',
    left: '0px',
    animation: `${bannerAnim3} 9s linear infinite`,
  },
  bannerIcon7: {
    bottom: '30%',
    right: '0%',
  },
  bannerHeading: {
    heading: {
      textAlign: 'center',
      maxWidth: 660,
      margin: ['25px auto 60px'],
    },
    title: {
      fontFamily: 'heading',
      fontWeight: 700,
      fontSize: [5, null, null, 26, null, 30, 9],
      lineHeight: [1.33, 1.33, 1.48],
      letterSpacing: ['-0.5px', null, null, null, null, null, '-1px'],
      img: {
        ml: ['15px'],
        position: 'relative',
        top: '8px',
      },
    },
    description: {
      color: 'heading',
      fontSize: [1, null, null, 2],
      lineHeight: [1.58, 1.58, 1.58, 2.2],
      maxWidth: ['none', 'none', 'none', 'none', 790],
      margin: '15px auto 0',
    },
  },
};
