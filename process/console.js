import {createRequire} from 'module';
const require=createRequire(import.meta.url);
import { red, bgGreen } from 'chalk';
//warning
console.warn("Warning");
//error
console.error("Error");
//info
console.info("info");

//log
console.log("Log");
//red
console.log(red("Sanjay kandula"));
console.log(bgGreen.red("Sanjay kandula"));