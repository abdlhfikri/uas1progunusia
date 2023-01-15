function auth(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "abdlhfikri"){
        if(password == "12345678"){
            window.location.assign("dashboard.html");
            alert("Selamat anda berhasil masuk");
        }else{
            alert("Mohon maaf password yand anda masukkan salah")
        }
    }else if(username == "perina"){
        if(password == "123456"){
            window.location.assign("dashboard.html");
            alert("Selamat anda berhasil masuk");
        }else{
            alert("Mohon maaf password yand anda masukkan salah")
        }
    }else{
        alert("Maaf username anda tidak terdaftar");
        return;
    }
}