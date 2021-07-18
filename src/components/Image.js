import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = (props) => {
  const data = useStaticQuery(graphql`
    query getImages($image: String, $width: Int){
      placeholderImage: file(relativePath: { eq: $image }) {
        childImageSharp {
          fixed (width: $width){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `, { image: props.image, width: props.width }
  );
  
  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return <Img fixed={data.placeholderImage.childImageSharp.fixed}/>
}

Image.defaultProps = {
  image: "",
  width: 1,
};

Image.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
}

export default Image
