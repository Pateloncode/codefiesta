/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Link } from 'theme-ui';
import Sticky from 'react-stickynode';
import Logo from 'components/logo';
import { NavLink } from 'components/link';
import { DrawerProvider } from 'contexts/drawer/drawer-provider';
import NavbarDrawer from './navbar-drawer';
import menuItems from './header.data';
import NewLogo from 'components/header/newlogo.js';
 
export default function Header() {
  return (
   
    <DrawerProvider>
      <Box sx={styles.headerWrapper}>
        <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={100}>
          <Box as="header" sx={styles.header}>
            <Container>
              <Box sx={styles.headerInner}>
                {/* <Logo sx={styles.NewLogo} /> */}
                <NewLogo sx={styles.NewLogo}/>
                
                <Box as="nav" sx={styles.navbar} className="navbar">
                  <Box as="ul" sx={styles.navList}>
                    {menuItems.map(({ path, label }, i) => (
                      <li key={i}>
                        <NavLink path={path} label={label} />
                      </li>
                    ))}
                  </Box>
                  <Link sx={{textDecoration:'none'}} href="https://chat.whatsapp.com/KiGESE0aFEf28NiRLG9rM5" target="_blank">
                  <Button variant="secondary" sx={styles.getStartedDesktop}>
                    Join us
                  </Button>
                  </Link>
                </Box>
                <Box sx={styles.wrapperBox}>
                <Link sx={{textDecoration:'none'}} href="https://chat.whatsapp.com/KiGESE0aFEf28NiRLG9rM5" target="_blank">
                <Button variant="textButton" sx={styles.getStartedMobile}>
                  Join Us
                </Button>
                </Link>
                <NavbarDrawer />
                </Box>
              </Box>
            </Container>
          </Box>
        </Sticky>
      </Box>
    </DrawerProvider>
  );
}


const styles = {
  headerWrapper: {
    backgroundColor: 'transparent',
    '.is-sticky': {
      header: {
        backgroundColor: 'white',
        boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
        paddingTop: '15px',
        paddingBottom: '15px',
      },
    },
  },

  header: {
    position: 'fixed',
    left: 0,
    right: 0,
    py: 4,
    transition: 'all 0.3s ease-in-out 0s',
    '&.is-mobile-menu': {
      backgroundColor: 'white',
    },
  },
  headerInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // NewLogo:{
   
  //   mr: [null, null, null, null, 6, 12],
    
  //   ml: '20px',
    

  // },
  logo: {
    mr: [null, null, null, null, 6, 12],
    ml: '-25px',
  },
  
  navbar: {
    display: ['none', null, null, null, 'flex'],
    alignItems: 'center',
    flexGrow: 1,
    // justifyContent: 'center',
  },
  navList: {
    display: ['flex'],
    listStyle: 'none',
    // marginLeft: 'auto',
    flexGrow: 1,
    p: 0,
    '.nav-item': {
      cursor: 'pointer',
      fontWeight: 400,
      padding: 0,
      margin: [0, 0, 0, 0, '0 20px'],
    },
    '.active': {
      color: 'primary',
    },
  },
  getStartedDesktop: {
    color: 'primary',
    display: ['none', 'none', 'none', 'none', 'flex'],
  },
  getStartedMobile: {
    color: 'primary',
    alignItems: 'center',
    fontSize: [1],
    minHeight: 30,
    m: ['0 15px 0 auto'],
    padding: '0 11px',
    display: ['flex', null, null, null, 'none'],
  },
  closeButton: {
    height: '32px',
    padding: '4px',
    minHeight: 'auto',
    width: '32px',
    ml: '3px',
    path: {
      stroke: 'text',
    },
  },
  wrapperBox: {
    display: 'flex',
    alignItems: 'center',
  }
};

