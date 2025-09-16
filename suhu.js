const fahrenheit = (a) => (a*9/5)+32;
const kelvin = (a) => a+273.15;
const reamur = (a) => a*0.8;

const hitung = () => {
    let a = parseFloat(document.getElementById("suhu").value);

    let op = document.getElementById("konversi").value;
    let hasil;

    if (op === "fahrenheit") {
        hasil = fahrenheit(a);
    } else if (op === "kelvin"){
        hasil = kelvin(a);
    } else if (op === "reamur"){
        hasil = reamur(a);
    } else {
        hasil = "operator tidak ditemukan";
    }

    document.getElementById("hasil").textContent = `Hasil: ${hasil}`;
}
/*
function loadNavbar() {
    const nav = document.createElement("nav");
    nav.innerHTML = `
        <nav>
            <a href="home.html">Home</a>
            <a href="bmi.html">Kalkulator BMI</a>
            <a href="suhu.html">Kalkulator Suhu</a>
            <a href="calc.html">Kalkulator</a>
        </nav>
    `;
    document.body.insertBefore(nav, document.body.firstChild);
}

loadNavbar();
*/
