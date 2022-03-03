const create= React.createElement;

const h1= create("h1",{key:1},"Con lo visto hasta ahora");

const h2= create("h2",{key:2},"Replica este HTML");
const h3= create("h3",{key:3},"Usando");
const h4= create("h4",{key:4},"React.js");
const footer= create("footer",{key:5},"Suerte!");
const main= create("main",{key:6},[h1,h2,h3,h4,footer]);

ReactDOM.render(main,document.querySelector("body"));