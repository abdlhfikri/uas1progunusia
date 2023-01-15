const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".mode"),
    modeText = body.querySelector(".mode-text");

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    });
    searchBtn.addEventListener("click", () => {
        sidebar.classList.remove("close");
    });
    
    modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText = "Light Mode"
        }else{
            modeText.innerText = "Dark Mode"
        }
    });


// hitung umur
function age() {
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    if(d1 > d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if(m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

document.getElementById('age').innerHTML = 'Umur Kamu Adalah '+y+' Tahun '+m+' Bulan '+d+' Hari';
}

// Nama Kota Negara
function validate() {
    var n = document.getElementById('negara').value;
    
    if(n=="indonesia") {
        document.getElementById('kota').innerHTML = 'Jakarta adalah Ibu Kota Indoenesia';
    } else if(n=="malaysia") {
        document.getElementById('kota').innerHTML = 'Kuala Lumpur adalah Ibu Kota Malaysia';
    } else if(n=="jerman") {
        document.getElementById('kota').innerHTML = 'Berlin adalah Ibu Kota Jerman';
    } else if(n=="prancis") {
        document.getElementById('kota').innerHTML = 'Paris adalah Ibu Kota Prancis';
    } else if(n=="argentina") {
        document.getElementById('kota').innerHTML = 'Buenos Aires adalah Ibu Kota Argentina';
    }
    else {
        document.getElementById('kota').innerHTML = 'Maaf Negara yang anda cari tidak ditemukan';
    }
}