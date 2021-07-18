import { graphql } from "gatsby";

export const HEADER_IMAGES = graphql`
  query getImage {
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
`;
