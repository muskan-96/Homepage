
import Header from "../components/Header";
import Layout from "../components/Layout";
import Mainpage from "../components/Mainpage";
import Footer from "../components/Footer";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Slider from "../components/Slider";
import Section6 from "../components/Section6";
import Footer2 from "../components/Footer2";
import Footer3 from "../components/Footer3";
const Index = () => {
  return (
    <Layout pageTitle="Landing Page Nextjs">
      <Header />
      <Mainpage/>
      <Footer/>
      <Section4/>
      <Section5/>
      <Slider/>
      <Section6/>
      <Footer2/>
      <Footer3/>
</Layout>
  )
}

export default Index;