/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image, Text, Link } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import { rgba } from 'polished';
import quote from 'assets/images/icons/quote.png';
import firebase from 'assets/images/logos/firebase.png';
import flutter from 'assets/images/logos/flutter.png';
import gcp from 'assets/images/logos/gcp.png';
import codelabs from 'assets/images/logos/codelabs.png';
import tensorflow from 'assets/images/logos/tensorflow.png';

const data = [
  {
    id: 1,
    logo: firebase,
    author: 'WEB DEVELOPMENT',
    quote: ( <div>Hello guys, if you have tried creating a <a style={{ fontWeight: '600', color: '#ead41c'}} href='https://roadmap.sh/' target='_blank'>Web Application</a>, then you know that it's not always simple, especially if you're not a full stack developer with years of experience.
    The good news is that if you don’t want to invest time in setting up a full-fledged backend, which is often not required for small apps, then <a style={{ fontWeight: '600', color: '#f5821f'}} href='https://firebase.google.com/learn/pathways/firebase-firestore' target='_blank'>Firebase</a> can really help you.</div>),
  },
  {
    id: 2,
    logo: flutter,
    author: 'APP DEVELOPMENT',
    quote: ( <div>APP DEVELOPMENT be it <a style={{ fontWeight: '600', color: '#3bd580'}} href='https://roadmap.sh/android' target='_blank'>android</a> or <a style={{ fontWeight: '600', color: '#ff472b'}} href='https://developer.apple.com/swift/' target='_blank'>iOS</a> is just the need of the hour. Every service today has an app and needless to say that they have flooded our phones. <a style={{ fontWeight: '600', color: '#005394'}} href='https://flutter.dev/learn' target='_blank'>Flutter</a> is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase. </div>),
    
  },
  {
    id: 3,
    logo: gcp,
    author: 'CLOUD COMPUTING',
    quote: ( <div>The practice of using a network of remote servers hosted on the internet to store, manage, and process data, rather than a local server or a personal computer, and today even our aadhar card data is saved on cloud servers! So dive in the world with <a style={{ fontWeight: '600', color: '#c54338'}} href='https://cloud.google.com/training' target='_blank'>GCP-Google Cloud Platform</a></div>),
  },
  {
    id: 4,
    logo: codelabs,
    author: 'HANDS ON TRAINING FOR ALL!',
    quote: ( <div>The old saying, practice makes a man perfect still stands true in this contemporary world and why not learn when you can have hands-on experience with <a style={{ fontWeight: '600', color: '#676c72'}} href='https://codelabs.developers.google.com/' target='_blank'>CodeLabs</a>. Your one stop solution for learning some awesome tech!</div>),
  },
  {
    id: 5,
    logo: tensorflow,
    author: 'ARTIFICIAL INTELLIGENCE/MACHINE LEARNING',
    quote: ( <div>Once considered as a concept of sci-fi movies is today a reality. From GitHub Co-Pilot to DALL-E2, AI is shaping our future and data rules the industry. Learning these can land you in one of the best positions across the circuit and <a style={{ fontWeight: '600', color: '#f5821f'}} href='https://www.tensorflow.org/learn' target='_blank'>Tensorflow</a> is the core open source library to help you develop and train ML models. Get started quickly by running Colab notebooks directly in your browser.</div>),
  },
];

const technologies = () => {
  return (
    <Box as="section" id="technologies" sx={styles.section}>
      <Container>
        <Tabs
          sx={styles.tabs}
          animated={{ tabPane: true }}
          tabPosition="bottom"
        >
          {data?.map((item) => (
            <TabPane key={item.id} tab={<Image src={item.logo} alt="logo" />}>
              <Box as="blockquote">
                {item.quote}
                <Text as="span" sx={styles.author}>
                  {item.author}
                </Text>
              </Box>
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </Box>
  );
};

export default technologies;

const styles = {
  section: {
    backgroundColor: rgba('#E3F2FD', 0.5),
    pt: [7, null, null, 9, null, 10, 11],
    pb: [9, null, null, 10, 11],
  },
  tabs: {
    border: 0,
    flexDirection: ['column-reverse', null, null, null, null, 'column'],
    '.rc-tabs-nav': {
      mt: [8, null, null, 9, 11],
    },
    '.rc-tabs-nav-wrap': {
      borderTop: `1px solid ${rgba('#01070D', 0.1)}`,
      justifyContent: 'center',
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      // m: ['0 45px'],
    },
    '.rc-tabs-tab-btn': {
      display: 'flex',
      alignItems: 'center',
      lineHeight: 1,
      outline: 0,
      img: {
        outline: 0,
        maxWidth: [50, 65, null, 110, '80%', '100%'],
        m: ['0 auto'],
      },
    },
    '.rc-tabs-nav-list': {
      flexGrow: 1,
      justifyContent: 'space-evenly',
      pt: [4, null, null, 7, 9],
    },
    '.rc-tabs-tabpane': {
      outline: 0,
      blockquote: {
        fontFamily: 'heading',
        fontWeight: 400,
        fontSize: [2, null, null, 3, 4, 6],
        lineHeight: [1.87, null, null, 2.08],
        position: 'relative',
        maxWidth: 846,
        margin: '0px auto',
        pt: ['12px', null, null, '17px', '13px'],
        pl: [35, 35, 35, 10, 11],
        ':before': {
          background: `url(${quote}) no-repeat`,
          zIndex: '-99',
          content: `''`,
          position: 'absolute',
          width: 128,
          height: 43,
          left: ['-31px', null, null, '-16px', '-7px', 0],
          top: ['1px', '1px', '1px', 0],
          backgroundSize: ['75%', null, null, '100%'],
        },
      },
      span: {
        color: '#7E8896',
        fontFamily: 'body',
        display: 'flex',
        fontWeight: 500,
        fontSize: [0, 1, 1, 2],
        lineHeight: 2.5,
        mt: [1, null, null, 3],
      },
    },
    '.rc-tabs-ink-bar': {
      top: 0,
      height: 2,
      backgroundColor: '#A17857',
      borderRadius: 5,
    },
  },
};
