import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text } from 'theme-ui'
import PostCard from 'components/post-card.js';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';
// import PostThumb1 from 'assets/images/blog/bytechaseevent.png';
import PostThumb2 from 'assets/images/blog/bun.png';
// import PostThumb4 from 'assets/images/blog/IoTws.png';
import PostThumb5 from 'assets/images/blog/maamfarewell.png';
import PostThumb6 from 'assets/images/blog/WlcmSess.png';

const data = [

  {
    id: 1,
    imgSrc:'https://firebasestorage.googleapis.com/v0/b/something-424ae.appspot.com/o/image%202%20(1)-1.png?alt=media&token=7bac39a5-cb3a-48ff-9334-c18ca1fffcb9',
    altText:'Info Session',
    title:'Info Session',
    authorName:'Chirag Guranani',
    date:'18-10-24',
  },
  {
    id: 2,
    imgSrc:'https://firebasestorage.googleapis.com/v0/b/something-424ae.appspot.com/o/d116f563-ce43-47e5-8d81-655770b31286%20(1)%20(1)-1.png?alt=media&token=d283d82e-3285-4dfd-b246-9e340aa6c0ab',
    altText: 'Chirag Gurnani',
    // postLink: 'https://photos.app.goo.gl/8gmYGf1SCsMLLRU46',
    title: 'BYTE-CHASE Event',
    authorName: 'Chirag Gurnani',
    date: '13-03-2024',
  },
  {
    id: 3,
    imgSrc:'https://firebasestorage.googleapis.com/v0/b/something-424ae.appspot.com/o/introS.png?alt=media&token=b1149210-746a-4439-b57d-37e586d63e72',
    altText: 'NFT Day Celebration',
    // postLink: 'https://gdsc.community.dev/e/m8h9zy/',
    title: 'NFT Day Celebration',
    authorName: 'Pranshu Rastogi & Ishita Rastogi',
    date: '20-09-2023',
  },
  
  {
    id: 4,
    imgSrc: PostThumb6,
    altText: 'Welcome Session',
    // postLink: 'https://gdsc.community.dev/events/details/developer-student-clubs-swami-keshvanand-institute-of-technology-management-gramothan-jaipur-presents-welcome-session-ay22-23/',
    title: 'Welcome Session',
    authorName: 'Akshat Surana',
    date: '30-11-22',
  },
  
  // {
  //   id: 3,
  //   imgSrc: PostThumb4,
  //   altText: 'IoT Workshop',
  //   // postLink: 'https://drive.google.com/drive/folders/1rx1SStx_yyf9In--i7Ur_Vj95QqkzB6L?usp=sharing',
  //   title: 'Hands-on IoT Workshop',
  //   authorName: 'Akshat Surana',
  //   date: '7-10-22 & 8-10-22',
  // },
  {
    id: 5,
    imgSrc: PostThumb5,
    altText: 'Dr. Neha janu',
    // postLink: 'https://photos.app.goo.gl/8gmYGf1SCsMLLRU46',
    title: 'Dr. Neha\'s Farewell',
    authorName: 'Dr. Neha Janu',
    date: '8-10-22',
  },
  // {
  //   id: 5,
  //   imgSrc: PostThumb1,
  //   altText: 'Blog 1: DALL·E 2',
  //   postLink: 'https://dsc-skit.hashnode.dev/ai-creates-stunning-images-from-text-dall-e-2',
  //   title: 'Blog 1: DALL·E 2',
  //   authorName: 'Chirag Sharma',
  //   date: '13-08-22',
  // },
  {
    id: 6,
    imgSrc: PostThumb2,
    altText: 'Blog 2: Bun.js',
    postLink: 'https://dsc-skit.hashnode.dev/bun-the-javascript-runtime-that-might-take-over-nodejs-and-denojs',
    title: 'Blog 2: Bun.js',
    authorName: 'Atishayee Singh',
    date: '14-08-22',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function EventSection() {
  return (
    <Box id="event-section" as="section" variant="section.news" >
      <Container sx={styles.content}>
        <Text as="span">Blogs & Events</Text>
        <Heading as="h3">
          Get ready to enhance knowledge & witness some awesome events.
        </Heading>
        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass="test"
            draggable={true}
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {data.map((item) => (
              <PostCard
                key={item.id}
                src={item.imgSrc}
                alt={item.altText}
                postLink={item.postLink}
                title={item.title}
                authorName={item.authorName}
                date={item.date}
              />
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  carouselWrapper: {
    '.carousel-container': {
      mx: -3,
    },
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 38.5%'],
    textAlign: ['center'],
    pt: ['80px', null, null, null, '0'],
    maxWidth: ['100%', null, null, '80%', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['30px', null, null, null, '0'],
    span: {
      fontSize: ['18px', '23px'],
      fontWeight: 700,
      color: 'primary',
      display: 'block',
      lineHeight: 1,
    },
    h3: {
      color: '#0F2137',
      fontWeight: 700,
      fontSize: ['23px', null, null, null, '30px', '36px', '44px'],
      maxWidth: ['100%', null, null, null, null, '100%', '100%'],
      lineHeight: 1.36,
      letterSpacing: '-1.5px',
      mt: '20px',
      mb: ['30px', '40px'],
    },
  }
};
