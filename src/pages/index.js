import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Whyus from 'sections/whyus';
import Technologies from 'sections/technologies';
import CallToAction from 'sections/call-to-action';
import Testimonials from 'sections/testimonials';
import OurTeam from 'sections/our-team';
import EventsSection from 'sections/events-section';
import SubscribeUs from 'sections/subscribe-us';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="CodeFiesta"
          description="Official page of CodeFiesta SKIT to keep up with the happenings of the club!"
        />
        <Banner />
        <Whyus />
        <Technologies />
        <CallToAction />
        <EventsSection />
        <Testimonials />
        <OurTeam />
      </Layout>
    </ThemeProvider>
  );
}
