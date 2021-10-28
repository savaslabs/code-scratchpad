import { functionExample } from "./modules/function-example.js";
import { ClassExample } from "./modules/class-example.js";

const title = document.querySelector("h1");

functionExample(title);
new ClassExample(title);
