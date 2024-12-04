// ini file javascript

// fungsion
// get value
// conversion
// calculate
// ouput

// rumus = Berat Badan (kg) / (Tinggi Badan (m) x Tinggi Badan (m))

// ambil semua nilai yang diinput
function calculateBmi() {

    let usia = document.getElementById('usia-input').value
    let beratBadan = document.getElementById('berat-badan-input').value
    // ambil nilai tinggi badan dan konversi ke meter
    let tinggiBadan = document.getElementById('tinggi-badan-input').value /100


   // validasi input form
   if (beratBadan !='' && usia !='' && tinggiBadan !='') {
        console.log = "sukses"
    } 
    else {
        alert('Ada input yang belum diisi. Coba cek lagi!')
    return
        }

    // validasi usia
    if (usia < 18 || usia > 65) {
        alert ("Mohon maaf 🙏 , usia harus diantara 18 dan 65 tahun.")
        return
    }

     // hitung bmi
    let bmi = beratBadan / (tinggiBadan * tinggiBadan)

    // hasil bmi
    document.getElementById('result-calculation').innerHTML = bmi.toFixed(2)

    let tes = ""

    // ketegori hasil bmi
    if (bmi < 18.5) {
        document.getElementById('info-result').innerHTML = 'Berat badan kurang proporslonal'
    }   else if (bmi >= 18.5 && bmi <= 22.9) {
        document.getElementById('info-result').innerHTML = 'Berat badan ideal 👍'
    }   else if (bmi >= 23 && bmi <= 29.9) {
        document.getElementById('info-result').innerHTML = 'Berat badan berlebih (berpotensi obsitas'
    }   else {
        document.getElementById('info-result').innerHTML = 'Kegemukan (Obesitas)'
    }
}


function resetFormBmi() {
    document.getElementById("berat-badan-input").value = ""
    document.getElementById("usia-input").value = ""
    document.getElementById("tinggi-badan-input").value = ""
    document.getElementById("result-calculation").textContent = "0"
    document.getElementById("info-result").textContent = "Keterangan"
}
