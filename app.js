

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let myLogin = document.getElementById("Mypassword").value;
    let myLoginLength = myLogin.length;
  
    if (myLoginLength < 4) {
      alert("parol Ishonchsiz: Parol kamida 4 ta belgidan iborat bo'lishi kerak!");
    } else if (myLoginLength >= 4 && myLoginLength <= 8) {
      alert("parol Ishonchli: Parol 4 dan 8 tagacha belgidan iborat!");
    } else if(myLoginLength > 8) {
      alert("parol Ishonchli: Parol 8 tadan ko'p belgidan ko'p");
    }
  });




