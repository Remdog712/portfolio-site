module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./_src/css/");
    eleventyConfig.addPassthroughCopy("./_src/js/");
    eleventyConfig.addPassthroughCopy("./_src/images/");
    eleventyConfig.addPassthroughCopy("./_src/models/");
    eleventyConfig.addPassthroughCopy("./_src/_data/");
    eleventyConfig.addPassthroughCopy("./_src/RO_Web.ico");
    
    return {
      dir: {
        input: "_src",
        includes: "_includes",
        output: "_site",
      },
    };
  };
  