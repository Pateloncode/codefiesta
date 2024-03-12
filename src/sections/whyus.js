/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/service1.png';
import icon2 from 'assets/images/icons/service2.png';
import icon3 from 'assets/images/icons/service3.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'CONNECT',
    description: `Meet students interested in developer technologies at your university. All are welcome, including those with diverse backgrounds and different majors.`,
  },
  {
    id: 2,
    icon: icon2,
    title: 'LEARN',
    description: `Learn about a range of technical topics and gain new skills through hands-on workshops, events, talks, and project-building activities - both online and in-person.`,
  },
  {
    id: 3,
    icon: icon3,
    title: 'GROW',
    description: `Apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to your community by helping others learn.`,
  },
];

const whyus = () => {
  return (
    <Box as="section" id="whyus" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Grow your technical skills with CodeFiesta-SKIT!"
          description="We are here to create a community that puts growth first.
          CodeFiesta Envisions a Flourishing Community of Empowered Coders, Architects of Tomorrow's Digital World, Who Inspire, Innovate, Colaborate and Drive Positive Change."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default whyus;

const styles = {
  section: {
    backgroundColor: rgba('#E3F2FD', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 860],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
