    const beratEl = document.getElementById('berat');
    const tinggiEl = document.getElementById('tinggi');
    const hitungBtn = document.getElementById('hitung');
    const outputEl = document.getElementById('output');

    function calculateBMI(kg, cm){
      const m = cm/100;
      return kg/(m*m);
    }

    function kategori(bmi){
      if(bmi < 18.5) return "Kurus (Underweight)";
      if(bmi < 25) return "Normal";
      if(bmi < 30) return "Kegemukan (Overweight)";
      return "Obesitas";
    }

    hitungBtn.addEventListener('click', ()=>{
      const berat = parseFloat(beratEl.value);
      const tinggi = parseFloat(tinggiEl.value);
      if(!berat || !tinggi){
        outputEl.textContent = "Masukkan data yang valid.";
        return;
      }
      const bmi = calculateBMI(berat, tinggi);
      const hasil = bmi.toFixed(1);
      outputEl.innerHTML = `<strong>BMI:</strong> ${hasil}<br><strong>Kategori:</strong> ${kategori(bmi)}`;
    });