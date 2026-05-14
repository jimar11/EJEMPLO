function calcular() {

    let temperaturas = [];
    let suma = 0;

    // Ingresar temperaturas
    for (let i = 0; i < 7; i++) {
        let temp = parseFloat(prompt("Ingrese la temperatura del día " + (i + 1)));

        temperaturas.push(temp);
        suma += temp;
    }

    let promedio = suma / 7;

    let diasMayores = "";

    // Verificar qué días superan el promedio
    for (let i = 0; i < 7; i++) {
        if (temperaturas[i] > promedio) {
            diasMayores += "Día " + (i + 1) + " (" + temperaturas[i] + "°C)<br>";
        }
    }

    // Mostrar resultados
    document.getElementById("resultado").innerHTML =
        "Promedio semanal: " + promedio.toFixed(2) + "°C<br><br>" +
        "Días con temperatura mayor al promedio:<br>" +
        diasMayores;
}