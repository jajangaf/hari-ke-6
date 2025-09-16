const prompt = require("prompt-sync")();

let lanjut;
do {
    let angka1 = parseFloat(prompt("Masukan angka pertama: "));
    let angka2 = parseFloat(prompt("Masukan angka ke dua: "));

    let pilihan = prompt("Pilih operator (+,-,*,/): ");
    switch (pilihan) {
        case '+':
            let tambah = angka1 + angka2;
            console.log(`${angka1} + ${angka2} = ${tambah}`);
            break;
        case '-':
            let kurang = angka1 - angka2;
            console.log(`${angka1} - ${angka2} = ${kurang}`);
            break;
        case '*':
            let kali = angka1 * angka2;
            console.log(`${angka1} * ${angka2} = ${kali}`);
            break;
        case '/':
            if (angka2 === 0) {
                console.log("Error: tidak bisa dibagi 0");
            } else {
                let bagi = angka1 / angka2;
                console.log(`${angka1} / ${angka2} = ${bagi}`);
            }
            break;
        default:
            console.log("Operator tidak dikenal");
            break;
    }
    lanjut=prompt("mau lanjut?(y/n)");  
} while (lanjut!=='n');

