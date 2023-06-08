var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var auth_exports = {};
__export(auth_exports, {
  getCurrentUser: () => getCurrentUser,
  isAuthenticated: () => isAuthenticated
});
module.exports = __toCommonJS(auth_exports);
var import_graphql_server = require("@redwoodjs/graphql-server");
var import_db = require("./db");
const getCurrentUser = async (session) => {
  return await import_db.db.user.findUnique({
    where: {
      id: session.id
    },
    select: {
      id: true,
      username: true
    }
  });
};
const isAuthenticated = () => {
  return !!import_graphql_server.context.currentUser;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getCurrentUser,
  isAuthenticated
});
//# sourceMappingURL=auth.js.map
