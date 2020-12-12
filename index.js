const colors = require("colors");
const yargs = require("yargs");
const fs = require('fs');
const writeStream = fs.createWriteStream("Tabla.xls");

const opts = {
    limite: {
        alias: 'l',
        default: 1,
        describe:"es el numero limite"
    }
}

const argumentos=yargs.command("listar",'Imprime la lista Factorial',opts).command("crear","Crea una tabla con la lista factorial",opts).help().argv
switch (argumentos._[0]) {
    case "listar":
        ListFactorial(argumentos.limite)
        break;
    case "crear":
        CrearTablaExcel(argumentos.limite)
            break;
    default:
        console.log("No existe ese comando o faltan argumentos")
        console.log("Ejecute la bandera --help para encontrar ayuda")
        break;
}
// ListFactorial(5);
// CrearTablaExcel(10)
function ExecuteProcess(limit) {
  let ArrayValues=[]

  const arrayFactorial = [...new Array(limit + 1).keys()].filter(
    (item) => item != 0
  );
  arrayFactorial.forEach((item, index, array) => {
    const itemList = [...new Array(item + 1).keys()]
      .filter((item) => item != 0)
      .reverse();

      const joinItem = itemList.join(" * ");

      const resultAcumulation = itemList.reduce((total, num) => total * num);
      ArrayValues.push({item,joinItem,resultAcumulation}) 
    });
    return ArrayValues
}
function ListFactorial(limit){
    console.log(`TABLA FACTORIAL DE LIMITE ${limit}`.green);
    const ArrayValues = ExecuteProcess(limit)
    ArrayValues.forEach(({item,joinItem,resultAcumulation})=>{
        console.log(
            `
      ${item}! = ${joinItem.toString()} = ${resultAcumulation}`.red
          );
    })

}
function CrearTablaExcel(limit) {
    const ArrayValues = ExecuteProcess(limit)

    let header="Numero"+"\t"+" Lista de numeros"+"\t"+"Total"+"\n";
    writeStream.write(header);
    ArrayValues.forEach(({item,joinItem,resultAcumulation})=>{
        let row = item+"\t"+joinItem+"\t"+resultAcumulation+"\n";
        writeStream.write(row);
      })
writeStream.close();
}
