const Image = require("@11ty/eleventy-img");
const path = require("path");

module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("images");

  // Image shortcode for responsive images
  eleventyConfig.addShortcode("image", async function(src, alt, sizes = "100vw") {
    let metadata = await Image(src, {
      widths: [300, 800, 1200],
      formats: ["jpeg", "webp"],
      outputDir: "_site/img/",
      urlPath: "/img/",
      filenameFormat: function (id, src, width, format, options) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);
        return `${name}-${width}w.${format}`;
      }
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

  // Square thumbnail shortcode with fallback
  eleventyConfig.addShortcode("thumbnail", async function(src, alt) {
    const fs = require('fs');
    
    // Check if image exists, if not use placeholder
    if (!fs.existsSync(src)) {
      src = "images/placeholder.jpg";
    }
    
    let metadata = await Image(src, {
      widths: [300],
      formats: ["jpeg", "webp"],
      outputDir: "_site/img/thumbnails/",
      urlPath: "/img/thumbnails/",
      sharpOptions: {
        resize: {
          width: 300,
          height: 300,
          fit: "cover",
          position: "center"
        }
      }
    });

    let imageAttributes = {
      alt,
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

  // Filter to check if item is sold
  eleventyConfig.addFilter("sold", function(item) {
    return item.sold === "true" || item.sold === true;
  });

  // Filter to split comma-separated images
  eleventyConfig.addFilter("splitImages", function(images) {
    if (!images) return [];
    return images.split(",").map(img => img.trim());
  });

  // Filter to get first image from comma-separated list
  eleventyConfig.addFilter("firstImage", function(images) {
    if (!images) return "";
    return images.split(",")[0].trim();
  });

  // Collection for furniture items
  eleventyConfig.addCollection("furniture", function(collectionApi) {
    return collectionApi.getAll().filter(item => item.data.furniture);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "../_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    pathPrefix: "/nickjtfurniture/"
  };
};