/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef, useState, useEffect } from 'react';
import { jsx, Box, Container, Image } from 'theme-ui';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'; // Import Autoplay module
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from 'components/section-heading';
import TeamMember from 'components/cards/team-member';

import avatar1 from 'assets/images/team/member1.png'; //priyanka
import avatar2 from 'assets/images/team/member2.png'; //chirag
import avatar3 from 'assets/images/team/member3.png'; //akshat
import avatar4 from 'assets/images/team/member4.png'; //giri
import avatar5 from 'assets/images/team/member5.png'; //vansh
import avatar6 from 'assets/images/team/member6.png'; //manan
import avatar7 from 'assets/images/team/member7.png'; //neha
import avatar8 from 'assets/images/team/member8.png'; //vinit
import avatar9 from 'assets/images/team/member9.png'; //hardik
import avatar10 from 'assets/images/team/member10.png'; //chirg somehitng

import arrowRight from 'assets/images/icons/arrow-right.png';

SwiperCore.use([Navigation, Pagination, Autoplay]); // Add Autoplay to SwiperCore

const data = [
  {
    id: 1,
    avatar: avatar1,
    name: 'Ms. Priyanka Sharma',
    designation: 'Faculty Advisor',
    socialLinks: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/priyanka-sharma-068a5946/',
      },
    ],
  },
  {
    id: 2,
    avatar: avatar2,
    name: 'Chirag Gurnani',
    designation: 'CodeFiesta Lead', 
    socialLinks: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/meet-chirag-gurnani',
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/_chirag_gurnani',
      },
 
     ],
  },
  {
    id: 3,
    avatar: avatar3,
    name: 'Akshat Surana',
    designation: 'Mentor', 
    socialLinks: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/akshat-surana',
      },
      {
        name: 'github',
        link: 'https://github.com/AksBoi',
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/akshatsurana01/',
      },

    ],
  },
  {
    id: 4,
    avatar: avatar4,
    name: 'Abhijeet Giri',
    designation: 'Core Team',
    socialLinks: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/abhijeetgiri1614',
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/abhijeet.giri1614',
      },





    
    ],
  },
  {
    id: 5,
    avatar: avatar5,
    name: 'Vansh Rastogi',
    designation: 'Core Team',
    socialLinks: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/vansh-rastogi',
      },
      {
        name:'github',
        link:'https://github.com/vanbitcase',
      },
      {
        name :'instagram',
        link:'https://www.instagram.com/vanshrastogi212',
      }
    ],
  },
  {
    id: 6,
    avatar: avatar6,
    name: 'Manan Patel',
    designation: 'Devlopment Team',
    socialLinks: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/manan-patel-193747248/',
      },
    ],
  },
  {
    id: 7,
    avatar: avatar7,
    name: 'Dr. Neha Janu',
    designation: 'Ex-Faculty Advisor',
    socialLinks: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/dr-neha-janu-99341323/',
      },
    ],
  },
  {
    id: 8,
    avatar: avatar8,
       name: 'Vinit Kumar Shah',
    designation: 'Ex-Core Team',
    socialLinks: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/vinit-kumar-shah/',
      },
      {
        name: 'github',
        link: 'https://github.com/Vinit-Kumar-Shah',
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/vinit_k_shah/',
      },
    ],
  },
  {
    id: 9,
    avatar: avatar9,
    
    name: 'Hardik Sharma',
    designation: 'Ex-Core Team',
    socialLinks: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/hardik-sharma8/',
      },
      {
        name: 'github',
        link: 'https://github.com/HARDIK-SHARMA-08',
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/_h.a.r.d.i.k/',
      },
    ],
  },
  {
    id: 10,
    avatar: avatar10,
    
    name: 'Chirag Kumar Sharma',
    designation: 'Ex-Core Team',
    socialLinks: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/chirag-kumar-sharma-5286b51b8/',
      },
      {
        name: 'github',
        link: 'https://github.com/chiragksharma',
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/chiragsharma862/',
      },
    ],
  },
  
];
  

const OurTeam = () => {
  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [containerOffset1, setContainerOffset1] = useState({
    left: null,
    top: null,
  });
  const [containerOffset2, setContainerOffset2] = useState({
    left: null,
    top: null,
  });

  const isEnd1 = swiperRef1?.current?.swiper?.isEnd;
  const isEnd2 = swiperRef2?.current?.swiper?.isEnd;

  const handlePrev1 = () => {
    swiperRef1?.current?.swiper?.slidePrev();
    setCurrentIndex1(swiperRef1?.current?.swiper?.activeIndex);
  };

  const handleNext1 = () => {
    swiperRef1?.current?.swiper?.slideNext();
    setCurrentIndex1(swiperRef1?.current?.swiper?.activeIndex);
  };

  const handlePrev2 = () => {
    swiperRef2?.current?.swiper?.slidePrev();
    setCurrentIndex2(swiperRef2?.current?.swiper?.activeIndex);
  };

  const handleNext2 = () => {
    swiperRef2?.current?.swiper?.slideNext();
    setCurrentIndex2(swiperRef2?.current?.swiper?.activeIndex);
  };

  useEffect(() => {
    setContainerOffset1({
      left: containerRef1.current.offsetLeft,
      top: containerRef1.current.offsetTop,
    });
    setContainerOffset2({
      left: containerRef2.current.offsetLeft,
      top: containerRef2.current.offsetTop,
    });
  }, [containerRef1, containerRef2]);

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1601: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  const autoplaySettings = {
    delay: 6000, // Delay between slides in milliseconds
    disableOnInteraction: false, // Allows user interaction to interrupt autoplay
  };

  return (
    <Box as="section" id="team" sx={styles.section}>
      <Container ref={containerRef1}>
        <SectionHeading
          sx={styles.heading}
          title="Meet your team"
          description="Trying to build an incredible workspace and grow with the community."
        />
      </Container>
      {/* First Row */}
      <Box
        sx={{
          ml: currentIndex1 === 0 ? containerOffset1?.left : 0,
          ...styles.teamWrapper,
        }}
      >
        {currentIndex1 !== 0 && (
          <button
            onClick={handlePrev1}
            className="swiper-arrow swiper-arrow-left"
          >
            <Image src={arrowRight} alt="arrow left" />
          </button>
        )}
        {!isEnd1 && (
          <button
            className="swiper-arrow swiper-arrow-right"
            onClick={handleNext1}
          >
            <Image src={arrowRight} alt="arrow right" />
          </button>
        )}

        <Swiper
          ref={swiperRef1}
          spaceBetween={30}
          watchSlidesVisibility={true}
          slidesPerView={5}
          breakpoints={breakpoints}
          autoplay={{ ...autoplaySettings, loop: true }} // Set loop to true
        >
          {/* Map over data and create SwiperSlide for each member */}
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <TeamMember member={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      {/* Second Row */}
      <Container ref={containerRef2}>
        <SectionHeading
          sx={styles.heading}
          title="Additional Team Members"
          description="More members who contribute to our community."
        />
      </Container>
      <Box
        sx={{
          ml: currentIndex2 === 0 ? containerOffset2?.left : 0,
          ...styles.teamWrapper,
        }}
      >
        {currentIndex2 !== 0 && (
          <button
            onClick={handlePrev2}
            className="swiper-arrow swiper-arrow-left"
          >
            <Image src={arrowRight} alt="arrow left" />
          </button>
        )}
        {!isEnd2 && (
          <button
            className="swiper-arrow swiper-arrow-right"
            onClick={handleNext2}
          >
            <Image src={arrowRight} alt="arrow right" />
          </button>
        )}

        <Swiper
          ref={swiperRef2}
          spaceBetween={30}
          watchSlidesVisibility={true}
          slidesPerView={5}
          breakpoints={breakpoints}
          autoplay={{ ...autoplaySettings, loop: true }} // Set loop to true
        >
          {/* Map over data and create SwiperSlide for each member */}
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <TeamMember member={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default OurTeam;

const styles = {
  section: {
    pt: [11],
    pb: [11, null, null, 12, null, 14],
  },
  heading: {
    p: {
      maxWidth: 500,
      m: '10px auto 0',
    },
  },
  teamWrapper: {
    position: 'relative',
    pl: [6],
    pr: [6, null, null, 0],
    transition: '0.3s ease-in-out 0s',
    '.swiper-arrow': {
      backgroundColor: '#fff',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      width: [30, null, null, null, 40, 60],
      height: [30, null, null, null, 40, 60],
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 7px 14px rgba(25, 60, 101, 0.06)',
      borderRadius: '50%',
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 40px)',
      transform: 'translateY(-50%)',
      outline: 0,
      img: {
        maxWidth: [8, 10, null, null, '100%'],
      },
    },
    '.swiper-arrow-left': {
      left: [3, null, null, null, 20, 50],
      img: {
        transform: 'rotate(180deg)',
        marginLeft: '-4px',
      },
    },
    '.swiper-arrow-right': {
      right: [3, null, null, null, 20, 50],
      img: {
        marginRight: '-4px',
      },
    },
  },
};
