function validasi(){
    var username = document.forms["myForm"]["username"].value;
    var password = document.forms["myForm"]["password"].value;
    if( username == "user" && password == "123"){
      alert("Login berhasil")
      document.getElementById("berhasil").innerHTML;
      return;
    }
    else if(username =="" || password ==""){
      alert("Masukan username dan password Anda");
      return false;
    }
    else{
      alert("Username atau password yang Anda masukan SALAH");
      return false;
    }
  }