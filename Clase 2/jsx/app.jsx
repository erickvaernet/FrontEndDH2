const { element } = require("prop-types");

const enStock=["Manzana","Pera","Naranja","Banana","Kiwi"];
const sinStock=["Durazno","Cereza","Anana"];

const App =()=>{
    return(
    <div>
        <h1>Lista de Productos en stock:</h1>
        <ul>
            {enStock.map((element)=><li>{element}</li>)}            
        </ul>
        <h2>Productos en falta:</h2>
        <ul>
            {sinStock.map((element)=><li>{element}</li>)}        
        </ul>
    </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))