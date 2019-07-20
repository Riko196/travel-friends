require("dotenv").config({ path: __dirname + "/.env" });

export const authConfig = {
  facebookId: process.env.FACEBOOK_ID
};

export const backendConfig = {
  host: process.env.SERVER_HOST,
  port: process.env.SERVER_PORT
};

export const profileConfig = {
  textareaLength: 512,
  inputLength: 255
};
