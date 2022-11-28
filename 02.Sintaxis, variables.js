/*- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)*/
const fecha_nacimiento = new Date("november 05 1993");
var libro = {
    titulo: "Danza de dragones",
    autor:"George R R Martin",
    fecha:"12 de julio de 2011",
    url:"https://www.amazon.com/-/es/GEORGE-R-MARTIN/dp/6073110871"
}
const alumno = {
    nombre:"Ezequiel Coria",
    edad:29,
    desarrollador:true,
    nacimiento:fecha_nacimiento,
    libro: libro


}
console.log(alumno.nacimiento)