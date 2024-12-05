function esCurioso(numero){
    let sumaCubos = numero.toString().split('') //Recibe el número transformándolo en una cadena de texto (String), split divide la cadena.

    let cubo = sumaCubos.map(Number) //Recibe el array y lo mapea

    let sumaTotal = 0;

    for (let i = 0; i < sumaCubos.length; i++) {
        sumaTotal += cubo[i]*cubo[i]*cubo[i] // Suma los cubos de los dígitos del número
    }

    if (sumaTotal == numero){
        return true; //Si es un número curioso, muestra True
    }else{
        return false; //Si no es un número curioso, muestra False
    }
}

console.log(esCurioso(153)) //Usamos para el ejercicio como ejemplo este número, si se quisiese se cambia de número para comprobarlo

function mostrarNumerosCuriosos() {
        
    let curiosos = [0,0,0,0,0];
    let cont = 0;

    for (let i = 1;cont != 5; i++) {

        if(esCurioso(i)){
            curiosos[cont] = i      //<--- Función para posicionar los números curiosos en el array "curiosos".
            cont++
        }
        
    }
    return alert(curiosos) //Devuelve con una alerta los números curiosos
}

mostrarNumerosCuriosos() //Muestra los números curiosos