//EcmaScript
//var saludo= "Hola a todos"; //variable string
//var saldudo = 5; //Variable numerico
//var saludo= true; //Variable Boolean
//var saludo = null; Variable null
//var saludo = undefined;
//var saludo = ["Hola", "a todos", 5, true, null, undefined, 17]; // Array
/*var saludo = {
  uno: "Hola",
  dos: "a todos",
  tres: 5,
  cinco: null,
  seis: undefined,
  siete: 17
}*/
/*<ul>
        {saludo.map((elemento, index) =>  {
        if (index === 0 || index === 2 || index === 3) {
          return<li>{elemento}</li>;
        }
        })}
        </ul>*/
//var saludo = ["tomate", "leche", "arroz", "papas", "carne"]; //array
 //const atributo = "apellidoPaterno";
/*"Holaa me llamo " + 
    miObjeto ["nombre"] + 
    " " +
    miObjeto ["apellidoPaterno"] + 
    " " + 
    miObjeto ["apellidoMaterno"] + 
    " " + 
    "mi edad es:  " + 
  miObjeto ["edad"]*/
//textoConst = "texto const 2";
//let textoLet = "texto let 3";
//const textoConst = "texto const 3";

/*if (true) {
  var textoVar = "texto var 4";
  let textoLet = "texto let 4";
  const textoConst = "texto const 4";
  console.log(textoLet);
  console.log(textoConst);
}*/
/*<h1>{textoVar}</h1>
      <h1>{textoLet}</h1>
      <h1>{textoConst}</h1>*/

/*var textoVar = "texto var 1";
let textoLet = "texto let 1";
const textoConst = "texto const 1";

textoVar = "texto var 2";
textoLet = "texto let 2";

var textoVar = "texto var 3";*/


function App() {
  const persona = {
    nombre: "Sergio Rolando",
    apellidoPaterno: "Diaz",
    apellidoMaterno: "Ventura",
    edad: 21,
  };

  const {nombre, apellidoPaterno, apellidoMaterno, edad} = persona;

 const contactoPersona = {
    telefono: "2871674529",
    email: "sergi0r0la15@gmail.com",
    empresa: "no existe",
  };

  const nuevoTelefono = "287106548"

  const infoPersonas = {...persona, ...contactoPersona, puesto: "estudiante", telefono: nuevoTelefono};

  /*console.log(persona);
  console.log(contactoPersona);
  console.log(infoPersonas);*/
  
  const frutas = [ "manzana", "naranja", "fresa", "pera"];
  const vegetales = [ "lechuga", "zanahoria", "alcachofa"];
  const carne = ["res", "cerdo", "pollo", "pescado"];

  const alimentos = [...frutas, ...vegetales, ...carne, "Me gusta la carne pero sobre todo me gustas tu uwu",];

  console.log(frutas);
  console.log(vegetales);
  console.log(carne);
  console.log(alimentos);
  
  
  return (
    <div className="App">
    <h1>
     {`Soy ${nombre} ${apellidoPaterno} ${apellidoMaterno} y tengo ${edad} años.`}
     </h1>
     <h1>
     Me gusta la carne, pero sobre todo me gustas tu uwu
     </h1>
   
    </div>
  );
}
export default App;
