import React from 'react';
import { Box } from 'theme-ui';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlockTitle from 'components/block-title';
import TestimonialsCard from 'components/cards/testimonial-card';
import testimonialsImage1 from 'assets/images/testimonials/testimonial-1-1.png';
import testimonialsImage2 from 'assets/images/testimonials/testimonial-1-2.png';
import testimonialsImage3 from 'assets/images/testimonials/testimonial-1-3.png';
import testimonialsImage4 from 'assets/images/testimonials/testimonial-1-4.png';
import testimonialsImage5 from 'assets/images/testimonials/testimonial-1-5.png';
import testimonialsImage6 from 'assets/images/testimonials/testimonial-1-6.png';

SwiperCore.use([Autoplay]);

const TESTIMONIALS_DATA = [
  [
    {
      image: testimonialsImage1,
      text:
        'I am really looking forward to see students work with various technologies🧑‍💻 and collaborate🤝 together to bring exciting stuff. Also I hope that the students are able to get the most out if it👍',
      username: '@dr.nilamchoudhary.',
      name: 'Dr.Nilam Choudhary',
    },
    {
      image: testimonialsImage2,
      text:
        'Being a student at a BTech college it really feels good to see more technical clubs setting up in the college. 💪More power to you guys!💫',
      username: '@ritesh.s&t',
      name: 'Ritesh Sharma',
    },
  ],
  [
    {
      image: testimonialsImage3,
      text:
        'I think that CodeFiesta will benifit students of SKIT🤩 and can inculcate the coding culture in the campus.💻',
      username: '@dr.nehajanu',
      name: 'Dr. Neha Janu',
    },
    {
      image: testimonialsImage4,
      text:
        'I am really excited about CodeFiesta Club. Its a great platform to learn and connect with others🥰. Looking forward to all the doors it will open for us. REALLY EXCITED!!✨✨✨',
      username: '@yayaaaaaa_des',
      name: 'Yayati',
    },
  ],
  [
    {
      image: testimonialsImage5,
      text:
        'Developer by brain🤯 but learner at heart❤️. I am here in CodeFiesta as mentor and will try to help you guys to sail through the journey smoothly.😁',
      username: '@vinit_k_shah',
      name: 'Vinit Kumar Shah',
    },
    {
      image: testimonialsImage6,
      text:
        'I have keen interest in new technologies and by CodeFiesta coming to our campus, we all will get new opportunities🌟 to connect with like-minded fellows, learn📖 and grow🪴.',
      username: '@_h.a.r.d.i.k',
      name: 'Hardik Sharma',
    },
  ],
  [
    {
      image: testimonialsImage1,
      text:
        'I am really looking forward to see students work with various technologies🧑‍💻 and collaborate🤝 together to bring exciting stuff. Also I hope that the students are able to get the most out if it👍',
      username: '@dr.nilamchoudhary.',
      name: 'Dr.Nilam Choudhary',
    },
    {
      image: testimonialsImage2,
      text:
        'Being a student at a BTech college it really feels good to see more technical clubs setting up in the college. 💪More power to you guys!💫',
      username: '@ritesh.s&t',
      name: 'Ritesh Sharma',
    },
  ],
  [
    {
      image: testimonialsImage3,
      text:
        'I think that CodeFiesta will benifit students of SKIT🤩 and can inculcate the coding culture in the campus.💻',
      username: '@dr.nehajanu',
      name: 'Dr. Neha Janu',
    },
    {
      image: testimonialsImage4,
      text:
        'I am really really excited about the CodeFiesta Club in our Skit college. Its a great platform to learn and connect with others🥰. Looking forward to all the doors it will open for us. REALLY EXCITED!!!!!!!!!!✨✨✨',
      username: '@yayaaaaaa_des',
      name: 'Yayati',
    },
  ],
  [
    {
      image: testimonialsImage5,
      text:
        'Developer by brain🤯 but learner at heart❤️. I am here in CodeFiesta as mentor and will try to help you guys to sail through the journey smoothly.😁',
      username: '@vinit_k_shah',
      name: 'Vinit Kumar Shah',
    },
    {
      image: testimonialsImage6,
      text:
        'I have keen interest in new technologies and by CodeFiesta Club coming to our campus, we all will get new opportunities🌟 to connect with like-minded fellows, learn📖 and grow🪴.',
      username: '@_h.a.r.d.i.k',
      name: 'Hardik Sharma',
    },
  ],
];

const Testimonials = () => {
  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testimonials}>
      <BlockTitle
        title="What people say about CodeFiesta🤩"
        text="We are excited to start our journey in SKIT and here is some motivation."
      />
      <Swiper {...testimonialCarousel}>
        {TESTIMONIALS_DATA.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map(({ image, text, name, username }, _index) => (
              <TestimonialsCard
                image={image}
                text={text}
                name={name}
                key={_index}
                username={username}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    backgroundColor: '#F4F4F6',
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['60px', null, null, null, '80px', null, '120px'],
  },
};
