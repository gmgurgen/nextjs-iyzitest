import { customAlphabet } from "nanoid";

const nanoid = customAlphabet(
  "01234567890abcdefghijklmnoprstuvyzABCDEFGHIJKLMNOPRSTUVYZ",
  20
);

export default nanoid;
