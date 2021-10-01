
function toCatch() {
    //creando el constructur
    function Persona(name, age, DNI) {
        this.name = name;
        this.age = age;
        this.DNI = DNI;
    }

    //capturando los inputs
    let catchName = document.getElementById("name").value;
    let catchAge = document.getElementById("age").value;
    let catchDNI = document.getElementById("DNI").value;

    //creando el objeto
    const newPerson = new Persona(catchName, catchAge, catchDNI)
    //imprimiendo en consola
    console.log(newPerson);


}