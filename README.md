<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h2 align="center">
  Personal Gatsby Starter with Image and BackgroundImage components
</h2>

My own Gatsby starter with the Gatsby Image and BackgroundImage components modified to be able to load any image (and not have to make a separate image component for each image).

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this starter.

    ```sh
    # create a new Gatsby site using the default starter
    gatsby new your-project-name https://github.com/064xp/64xp-gatsby-starter
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd your-project-name/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

### 🧐 How to use the Image and BackgroundImage components?
---

To begin, all of your images should be in the `src/images/` directory.
You can change the directory graphql will look for the images in the `gatsby-config.js`

```
{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `images`,
    path: `${__dirname}/src/images`,
  },
},
```
 ### Queries

  For both Image and BackgroundImage you must add each image you will use to the graphql query.

```
<StaticQuery
  query={graphql`
    query {
      imageName: file(relativePath: { eq: "path-to-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    }
  `}
  render={data => <Img className={this.props.className} fluid={data[src].childImageSharp.fluid} />}
/>
```
And for each image just add

```
      anotherImage: file(relativePath: { eq: "name-of-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
```

So that it should look like this:

```
<StaticQuery
  query={graphql`
    query {
      imageName: file(relativePath: { eq: "path-to-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      anotherImage: file(relativePath: { eq: "name-of-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
  render={data => <Img className={this.props.className} fluid={data[src].childImageSharp.fluid} />}
/>
```

_**NOTE: ** The image name you specify in the query is the name that you will use to reference the image you want when using the component._

### Implementation

Both the Image and the BackgroundImage component take 2 props, `src` and `className`.

* `src` refers to the name you gave the image in the query inside to component
* `className` is any CSS class or classes you would like the image or container to have

_**Example:**_

```
<Image src="sampleImage" className="image"/>
```
