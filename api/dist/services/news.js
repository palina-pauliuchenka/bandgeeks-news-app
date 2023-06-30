var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var news_exports = {};
__export(news_exports, {
  default: () => news_default
});
module.exports = __toCommonJS(news_exports);
var import_includes = __toESM(require("@babel/runtime-corejs3/core-js/instance/includes"));
var import_map = __toESM(require("@babel/runtime-corejs3/core-js/instance/map"));
var import_is_array = __toESM(require("@babel/runtime-corejs3/core-js/array/is-array"));
const API_KEY = process.env.API_KEY;
const getArticles = async ({
  criteria
}) => {
  const categories = ["general", "business", "entertainment", "technology", "sports", "health", "science"];
  let articles = [];
  let totalResults = 0;
  if ((0, import_includes.default)(categories).call(categories, criteria)) {
    var _context;
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${criteria}&apiKey=${API_KEY}`);
    const json = await response.json();
    articles = (0, import_map.default)(_context = json.articles).call(_context, (article) => ({
      ...article,
      category: criteria
    }));
    totalResults = json.totalResults;
  } else if ((0, import_includes.default)(criteria).call(criteria, "/")) {
    const choices = criteria.split("/");
    choices.pop();
    for (let i = 0; i < choices.length; i++) {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${choices[i]}&apiKey=${API_KEY}`);
      const json = await response.json();
      if ((0, import_is_array.default)(json.articles)) {
        var _context2;
        const articlesWithCategory = (0, import_map.default)(_context2 = json.articles).call(_context2, (article) => ({
          ...article,
          category: choices[i]
        }));
        articles = [...articles, ...articlesWithCategory];
        totalResults += json.totalResults;
      }
    }
  } else {
    var _context3;
    const response = await fetch(`https://newsapi.org/v2/everything?q=${criteria}&apiKey=${API_KEY}`);
    const json = await response.json();
    articles = (0, import_map.default)(_context3 = json.articles).call(_context3, (article) => ({
      ...article,
      category: criteria
    }));
    totalResults = json.totalResults;
  }
  return {
    totalResults,
    articles
  };
};
var news_default = getArticles;
//# sourceMappingURL=news.js.map
