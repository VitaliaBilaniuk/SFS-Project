import { groupBy } from "lodash-es"
import people from "./people"
import './style.scss'
import './image-example'

const managerGroups = groupBy(people, "manager");

const root = document.createElement("div");
const hello = document.createElement("div");

root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`;
hello.innerHTML = '<p class="hello">Hello world</p>';
document.body.appendChild(root);
document.body.appendChild(hello);