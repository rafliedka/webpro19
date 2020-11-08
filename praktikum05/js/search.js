function cariTeman(){
    let frm = document.getElementById("frm_cari")
    let str = frm.nama_cari.value
    alert("Kata Cari : " +frm.cari_nama.value)
    document.getElementById("katacari").innerHTML = str
    console.log(str)
    if(str == "mamad"){
        console.log("mamamd ketekmu !!")
        document.getElementById("katacari").style="color: aqua"
    }
    else{
        console.log("Bukan mamad")
        document.getElementById("katacari").style="color: red"
    }
}