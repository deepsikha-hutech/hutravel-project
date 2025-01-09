const env = process.env.NODE_ENV || "local";
console.log(env);
let variable = {};
variable.env = env;
if (env === "local") {
  variable.HUTRAVEL_API_URL = "http://localhost:3000";
} else if (env === "development") {
  variable.HUTRAVEL_API_URL = "";
} else if (env === "qa") {
} else if (env === "uat") {
} else if (env === "prod") {
}

export default variable;
