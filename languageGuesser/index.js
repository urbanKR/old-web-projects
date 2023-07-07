import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { franc } from "franc";
const langs = require("langs");
const colors = require("colors");
const input = process.argv[2];
const languageCode = franc(input);


if (languageCode === 'und') {
    console.log("Can't figure it out. Try to use more text!".red);
} else {
    const language = langs.where("3", languageCode);
    console.log("My best guess is: ", language.name.rainbow);
}

