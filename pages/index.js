import React from "react";
import Head from "next/head";
import ScrollAnimation from "react-animate-on-scroll";

import Icon from "@mdi/react";
import {
  mdiSpeedometer,
  mdiMonitorCellphone,
  mdiLightbulbOn,
  mdiRocket,
  mdiPencilRuler
} from "@mdi/js";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import Bullet from "../components/Bullet";
import SkillBullet from "../components/SkillBullet";
import PortfolioCard from "../components/PortfolioCard";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="home">
        <Hero />

        <Nav />
      </section>

      <section id="about" className="content-section">
        <div className="container mx-auto">
          <SectionHeading title="About" animationDirection="Left" />
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <Bullet
              icon={mdiSpeedometer}
              label="Fast"
              body="Optimized load times and app performance are my first and foremost priorities."
            />
            <Bullet
              icon={mdiMonitorCellphone}
              label="Responsive"
              body="My applications are designed to work and look great on any device."
              delay={333}
            />
            <Bullet
              icon={mdiLightbulbOn}
              label="Intuitive"
              body="I posses a keen sense for clean, intuitive UI/UX design."
              delay={667}
            />
            <Bullet
              icon={mdiRocket}
              label="Dynamic"
              body="Even the most simple websites can be lively and engaing."
              delay={1000}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ScrollAnimation
              className="my-12 md:my-0"
              animateIn="slideInLeft"
              animateOnce={true}
            >
              <img src="/img/hexagon-avatar.png" className="w-64 mx-auto" />
              <h1 className="text-center my-4 text-gray-700">Hello, World!</h1>
              <div className="px-20 text-center font-body text-gray-600">
                I'm a full-stack developer located in Charlotte, NC. <br /> My
                passion for crafting effecient, well-optimized applications with
                engaging and intuitive user experiences knows no bounds!
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              className="grid grid-cols-2"
              animateIn="slideInRight"
              animateOnce={true}
            >
              <SkillBullet imgSrc="/img/skills/react-logo.svg" label="React" />
              <SkillBullet
                imgSrc="/img/skills/javascript-logo.svg"
                label="JavaScript"
                left
              />
              <SkillBullet
                imgSrc="/img/skills/html-logo.svg"
                label="HTML"
                right
              />
              <SkillBullet imgSrc="/img/skills/css-logo.svg" label="CSS" />
              <SkillBullet
                imgSrc="/img/skills/photoshop-logo.svg"
                label="Photoshop"
                left
              />
              <SkillBullet
                imgSrc="/img/skills/illustrator-logo.svg"
                label="Illustrator"
                right
              />
              <SkillBullet
                imgSrc="/img/skills/pencil-ruler.svg"
                label="UI/UX Design"
              />
              <SkillBullet
                imgSrc="/img/skills/figma-logo.svg"
                label="Figma"
                left
              />
              <SkillBullet
                imgSrc="/img/skills/node-js-logo.svg"
                label="Node.js"
                right
              />
              <SkillBullet imgSrc="/img/skills/css-logo.svg" label="CSS" />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section id="portfolio" className="content-section bg-gray-100">
        <div className="container mx-auto">
          <SectionHeading title="Portfolio" animationDirection="Right" />
          <div className="grid grid-cols-2 lg:grid-cols-3">
            <PortfolioCard
              cardKey="1"
              title="Gourmand"
              projectStack="React"
              githubHref="https://github.com/nrusso21/gourmand"
              deployedHref="https://gourmand.netlify.com/"
              bgImgPath="/img/portfolio/gourmand.jpg"
            />
            <PortfolioCard
              cardKey="2"
              title="Season Detector"
              projectStack="React"
              githubHref="https://github.com/nrusso21/react-hooks-seasons-app"
              deployedHref="https://seasons-hooks-react-app.netlify.com/"
              bgImgPath="/img/portfolio/seasons-hooks.jpg"
            />
            <PortfolioCard
              cardKey="3"
              title="YouTube Search"
              projectStack="React"
              githubHref="https://github.com/nrusso21/react-youtube-search"
              deployedHref="https://youtube-search-react-app.netlify.com/"
              bgImgPath="/img/portfolio/youtube-search.jpg"
            />
            <PortfolioCard
              cardKey="4"
              title="Translate Demo"
              projectStack="React"
              githubHref="https://github.com/nrusso21/react-translate-form"
              deployedHref="https://app.netlify.com/sites/translate-react-app/overview"
              bgImgPath="/img/portfolio/translate-demo.jpg"
            />
            <PortfolioCard cardKey="5" />
            <PortfolioCard cardKey="6" />
            <PortfolioCard cardKey="7" />
            <PortfolioCard cardKey="8" />
            <PortfolioCard cardKey="9" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
