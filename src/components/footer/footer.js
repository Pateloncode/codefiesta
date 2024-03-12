import { jsx, Box, Grid, Container, Image, Heading, Text, Link } from 'theme-ui';
import { Link as ILink } from 'components/link';
import data from './footer.data';
import Logo from 'components/logo';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const socialLinks = [
  {
    name: 'mail',
    link: 'mailto:codefiesta@skit.ac.in',
  },
  // {
  //   name: 'linkedin',
  //   link: 'https://www.linkedin.com/company/gdsc-skit/',
  // },
  // {
  //   name: 'github',
  //   link: 'https://github.com/dsc-skit',
  // },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/codefiesta_skit'
  },
  {
    name: 'whatsapp',
    link: 'https://chat.whatsapp.com/KiGESE0aFEf28NiRLG9rM5',
  },
]

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        {/* End of footer widgets area */}
        <Box sx={styles.footer.footerBottomArea}>
          <ILink path="/">
           
          <Logo />
          </ILink>
          {/* <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem?.map(({ path, label }, i) => (
                <ILink
                  path={path}
                  key={i}
                  label={label}
                  sx={styles.footer.link}
                />
              ))}
            </nav>
          </Box> */}
          <Box sx={styles.socialLinks}>
          {socialLinks?.map((social, index) => (
            <Link href={social?.link} target="_blank" key={index}>
                <nav><a>
              {social?.name === 'mail' && (
                 <FiMail size="30px" color="#ca473a"/>
               )}
              {social?.name === 'linkedin' && (
                <FaLinkedin size="30px" color="#55ACEE" />
              )}
              {social?.name === 'github' && (
                <FaGithub size="30px" color="#161614" />
              )}
              {social?.name === 'instagram' && (
                <FaInstagram size="30px" color="#B2215A"/>
              )}
               {social?.name === 'whatsapp' && (
                <FaWhatsapp size="30px" color="#54cc61"/>
              )}
              </a></nav>
            </Link>
          ))}
        </Box>
          <Text sx={styles.footer.copyright}>
          All rights reserved | Copyright by © {new Date().getFullYear()} CodeFiesta-SKIT
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  socialLinks: {
    display: 'flex',
    mt: [3, 4],
    mb: 2,
    ml: 4,
    alignItems: 'center',
    justifyContent: ['center'],
    a: {
      display: 'inline-flex',
      mr: [2],
    },
  },
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['30px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },

  widgets: {
    py: [8, null, 9],
    px: [4, 0, 3, null, 7, 10],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['30px 0', null, '45px 30px', null, '60px 30px', '30px 90px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      'repeat(3,1fr)',
    ],
    widgetItem: {
      textAlign: 'center',
    },
    infoWrapper: {
      mt: [2, 3, null, 2, 4],
      mb: -1,
      h3: {
        fontSize: [3, null, null, 2, 3, 4],
        color: 'heading_secondary',
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, null, null, null, '15px'],
      },

      p: {
        fontSize: [1, '15px'],
        fontWeight: 400,
        lineHeight: 2,
      },
    },
  },
};
