import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image";
import { HEADER_IMAGES } from "./graphql";
import PropTypes from "prop-types";
import Button from "../Button";
// import Image from "../Image"

const Header = ({ siteMetadata }) => {
  console.log(HEADER_IMAGES);
  const images = useStaticQuery(graphql`
    query getHeaderImages {
      lightMode: file(relativePath: {eq: "header/lightMode.png"}) {
        childImageSharp {
          fixed(width: 1) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      darkMode: file(relativePath: {eq: "header/lightMode.png"}) {
        childImageSharp {
          fixed(width: 1) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mail: file(relativePath: {eq: "header/mail.png"}) {
        childImageSharp {
          fixed(width: 1) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      github: file(relativePath: {eq: "header/github.png"}) {
        childImageSharp {
          fixed(width: 1) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitter: file(relativePath: {eq: "header/twitter.png"}) {
        childImageSharp {
          fixed(width: 1) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(relativePath: {eq: "header/linkedin.png"}) {
        childImageSharp {
          fixed(width: 1) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      instagram: file(relativePath: {eq: "header/instagram.png"}) {
        childImageSharp {
          fixed(width: 1) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      behance: file(relativePath: {eq: "header/lightMode.png"}) {
        childImageSharp {
          fixed(width: 1) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dribble: file(relativePath: {eq: "header/lightMode.png"}) {
        childImageSharp {
          fixed(width: 1) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <header className="bg-dark text-base border-gray border-b flex items-center justify-between">
      <div className="p-3 text-white italic">
        <Link to="/" className="no-underline">
          {siteMetadata?.title}
        </Link>
      </div>
      <div className="flex items-center justify-end">
        <div className="border-gray border-r p-2">
          <Button
            to={siteMetadata?.resume}
            external={true}
          >
            Resume
          </Button>
        </div>
        <div className="border-gray border-r p-2">
          <Img fixed={images.lightMode.childImageSharp.fixed} />
        </div>
        <div className="p-2">
          <span className="text-sm text-white">Menu</span>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
