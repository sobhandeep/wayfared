const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

// Add custom resolver to support aliases
defaultConfig.resolver.extraNodeModules = {
  "@/constants": `${__dirname}/constants`,
  "@/components": `${__dirname}/components`,
  "@/styles": `${__dirname}/styles`,
  "@/context": `${__dirname}/context`,
};

module.exports = defaultConfig;