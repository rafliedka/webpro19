function main() {
    let hewan = document.getElementById("gambar").value

    if (hewan == "kucing"){
        hewan = "gambar/kucing.jfif"
        alert("Ini gambar kucing.jpg")
    } 
    else if (hewan == "kambing") {
        hewan = "gambar/kambing.jfif"
        alert("Ini gambar kambing")
    } 
    else if (hewan == "deragon") {
        hewan = "gambar/deragon.jfif"
        alert("Ini gambar Deragon")
    } 
    else if (hewan == "tapir"){
        hewan = "gambar/tafir.jfif"
        alert("Ini gambar tapir")
    } 
    else if (hewan == "capybara"){
        hewan = "gambar/capybara.jpg"
        alert("Ini gambar capybara")
    } 
    else if (hewan == "tikusbulan"){
        hewan = "gambar/tikus-bulan.jpg"
        alert("Ini gambar tikus bulan")
    }

    document.getElementById("image").src = hewan

}