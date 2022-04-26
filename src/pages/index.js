import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-awesome-styled-grid"
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaFileAlt,
} from "react-icons/fa"
import siteConfig from "../../data/siteConfig"
import homePage from "../../data/homepage.json"

import {
  Layout,
  Hero,
  Seo,
  Wrapper,
  About,
  Skills,
  Timeline,
  Education,
  Publications,
  Hobbies,
  // Contact,
} from "../components"

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
`

class Home extends React.Component {
  render() {
    // validate siteConfig settings
    if (siteConfig.googleAnalyticsId === "UA-000000000-1") {
      console.error(
        "WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details."
      )
    }

    const title = siteConfig.siteTitle
    const { keywords } = siteConfig
    return (
      <div className={this.props.className}>
        <Layout location={this.props.location}>
          <Seo title={title} keywords={keywords} />

          <Hero heroImg={homePage.hero.sitecover} title={homePage.hero.title} />

          <Wrapper className={this.props.className}>
            <Container className="page-content" fluid>
              <Row>
                <Col xs={4} className="avatar">
                  <img
                    className="avatar__image"
                    src={homePage.social_contact.avatar}
                    alt="user avatar"
                  />
                  <div className="social">
                    {homePage.social_contact.github && (
                      <a
                        className="social-link github"
                        href={homePage.social_contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="social-icon" size="32" />
                      </a>
                    )}
                    {homePage.social_contact.linkedin && (
                      <a
                        className="social-link linkedin"
                        href={homePage.social_contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="social-icon" size="32" />
                      </a>
                    )}
                    {homePage.social_contact.twitter && (
                      <a
                        className="social-link twitter"
                        href={homePage.social_contact.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter className="social-icon" size="32" />
                      </a>
                    )}
                    {homePage.social_contact.email && (
                      <a
                        className="social-link email"
                        href={`mailto:${homePage.social_contact.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaEnvelope className="social-icon" size="32" />
                      </a>
                    )}
                    {homePage.social_contact.resume && (
                      <a
                        className="social-link resume"
                        href={`${homePage.social_contact.resume}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFileAlt className="social-icon" size="28" />
                      </a>
                    )}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={4} sm={4}>
                  <About title={homePage.about.title} text={homePage.about.description} />
                </Col>
                <Col xs={4} sm={4}>
                  <Skills title={homePage.skills.title} skills={homePage.skills.skill} />
                </Col>
              </Row>
              <Separator />
              <Timeline title={homePage.experience.title} experience={homePage.experience.experience} />
              {/* <Separator />
            <Repositories /> */}
              <Separator />
              {homePage.publications.display_publication && (
                <Publications title={homePage.publications.title} publications={homePage.publications.publications}/>
              )}
              <Separator />
              <Education title={homePage.education.title} education={homePage.education.education} languageTitle={homePage.education.languages_title} languages={homePage.education.language}/>
              <Separator />
              <Hobbies title={homePage.hobbies.title} hobbies={homePage.hobbies.hobby} />
              <Separator />
              {/* <Contact /> */}
            </Container>
          </Wrapper>
        </Layout>
      </div>
    )
  }
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
    margin-bottom: 24px;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .social-link {
    padding: 8px;
    color: #555;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
  }

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077b5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }

  a.social-link.resume:hover {
    color: #40c22b;
  }
`
