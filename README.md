# gatsby-remark-emoji-unicode

Convert emoji code to unicode in markdown files `:tada: -> 🎉`

## Install

`npm install --save gatsby-remark-emoji-unicode`

**Note:** You also need to have `gatsby-transformer-remark` to transform markdown files first.

## How to use

In your `gatsby-config.js`

```javascript
module.exports = {
  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-emoji-unicode`],
      },
    },
  ],
}
```
