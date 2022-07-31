const esModules = [
  "d3",
  "d3-shape",
  "d3-array",
  "other-d3-module-if-needed",
].join("|");

module.exports = {
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
};
