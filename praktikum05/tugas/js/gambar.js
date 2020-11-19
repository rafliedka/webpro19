function main() {
    let animal = document.getElementById("gambar").value

    if (animal == "kucing"){
        animal = "https://tkplusaliman.files.wordpress.com/2012/05/mewarnai-kura-kura-2.jpg"
        alert("Ini gambar kucing.jpg")
    } else if (animal == "kambing") {
        animal = "https://2.bp.blogspot.com/-fj4-kJIXT8Q/VJBnMx58A7I/AAAAAAAAN-k/S1dWdPe2Fik/s1600/burung.bmp"
        alert("Ini gambar kambing")
    } else if (animal == "deragon") {
        animal = "https://1.bp.blogspot.com/-1Q0rfUOUhNU/V3b122YmfcI/AAAAAAAAAQg/FoK-VfIZoEURI4iNmOY3jYXl7LiZF9P3ACLcB/s1600/mewarnai%2Bgambar%2Bsketsa%2Bikan%2B2.jpg"
        alert("Ini gambar Deragon")
    } else if (animal == "tapir"){
        animal = "https://i.pinimg.com/originals/89/40/35/89403517be270a71e1d42ab3c70ae890.jpg"
        alert("Ini gambar tapir")
    } else if (animal == "capybara"){
        animal = "https://2.bp.blogspot.com/-mcAJpriG4rY/VJBm32vLCGI/AAAAAAAAN6k/_C37AXAoBOI/s1600/arnab.bmp"
        alert("Ini gambar capybara")
    } else if (animal == "tikusbulan"){
        animal = "https://2.bp.blogspot.com/-4AHzmS1JOws/VJBna9f6RmI/AAAAAAAAOBw/qa4DJamcASM/s1600/gajah.bmp"
        alert("Ini gambar tikus bulan")
    }

    document.getElementById("images").src = animal

}