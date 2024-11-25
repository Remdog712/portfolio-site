module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./_src/css/");
    eleventyConfig.addPassthroughCopy("./_src/js/");
    eleventyConfig.addPassthroughCopy("./_src/images/");
    eleventyConfig.addPassthroughCopy("./_src/models/");
  
    return {
      dir: {
        input: "_src",
        includes: "_includes",
        output: "_site",
      },
    };
  };
  