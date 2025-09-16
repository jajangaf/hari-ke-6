const promt = require("prompt-sync")();

const luasLingkaran = (jariJari) => 3.14*jariJari*jariJari;
let jariJari = parseFloat(promt("Masukan jari-jari: "));

console.log(`Luas lingkaran adalah: ${luasLingkaran(jariJari)}`);