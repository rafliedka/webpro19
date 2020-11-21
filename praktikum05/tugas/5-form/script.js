let namaPelanggan = document.getElementById("name");
let emailPelanggan = document.getElementById("email");
let jamTerbang = document.getElementById("time");
let destinasi = document.getElementById("destination");
let tiket = document.getElementById("ticket");
let validation = document.getElementById("form");

validation.addEventListener("Submit", function(event){
    event.preventDefault();

    if(namaPelanggan.nodeValue.length === 0 && namaPelanggan.nodeValue.length <= 30){
        namaPelanggan.classList.add("error");
    } else {
        namaPelanggan.classList.add("Succes")
    }

    if(emailPelanggan.nodeValue.length === 0){
        emailPelanggan.classList.add("error");
    } else {
        emailPelanggan.classList.add("Success");
    }

    if(jamTerbang.nodeValue.length === 0){
        jamTerbang.classList.add("error");
    } else {
        jamTerbang.classList.add("Success");
    }

    if(destinasi.nodeValue.length === 0){
        destinasi.classList.add("error");
    } else {
        destinasi.classList.add("Success");
    }

    if(tiket.nodeValue.length === 0){
        tiket.classList.add("error");
    } else {
        tiket.classList.add("Success");
    }
});