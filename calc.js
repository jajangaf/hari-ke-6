const tambah = (a,b) => a+b;
const kurang = (a,b) => a-b;
const kali = (a,b) => a*b;
const bagi = (a,b) => b!==0?a/b:"tidak bisa dibagi 0";

const hitung = () => {
    let a = parseFloat(document.getElementById("angka1").value);
    let b = parseFloat(document.getElementById("angka2").value);

    let op = document.getElementById("operator").value;
    let hasil;

    if (op === "+") {function hitung() {
      const angka1 = parseFloat(document.getElementById('angka1').value);
      const angka2 = parseFloat(document.getElementById('angka2').value);
      const operator = document.getElementById('operator').value;
      let hasil;

      if (isNaN(angka1) || isNaN(angka2)) {
        hasil = "Harap masukkan angka dengan benar!";
      } else {
        switch (operator) {
          case '+':
            hasil = angka1 + angka2;
            break;
          case '-':
            hasil = angka1 - angka2;
            break;
          case '*':
            hasil = angka1 * angka2;
            break;
          case '/':
            hasil = angka2 !== 0 ? (angka1 / angka2) : "Tidak bisa dibagi 0";
            break;
        }
      }
      document.getElementById('hasil').innerText = "Hasil: " + hasil;
    }
        hasil = tambah(a,b);
    } else if (op === "-"){
        hasil = kurang(a,b);
    } else if (op === "*"){
        hasil = kali(a,b);
    } else if (op === "/"){
        hasil = bagi(a,b);
    } else {
        hasil = "operator tidak ditemukan";
    }

    document.getElementById("hasil").textContent = `Hasil: ${hasil}`;
}