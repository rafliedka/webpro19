function menjumlahkan(){
    let strbilangan = document.getElementById("bilangan").value
    let strbilangan2 = document.getElementById("bilangan2").value
    console.log(strbilangan + strbilangan2)
    let bilangan = parseInt(strbilangan)
    let bilangan2 = parseInt(strbilangan2)
    console.log(bilangan + bilangan2)
    let hasilbilangan = bilangan + bilangan2

    document.getElementById("hasil").innerHTML = hasilbilangan
}