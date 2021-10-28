import { functionExample } from "./modules/function-example.js";
import { ClassExample } from "./modules/class-example.js";

const documentBody = document.body;

functionExample(documentBody);
new ClassExample(documentBody);
