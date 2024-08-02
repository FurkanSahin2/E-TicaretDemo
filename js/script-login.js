function yonlendir() {
    var kullaniciAdi = document.getElementById("kullaniciAdi").value;
    var sifre = document.getElementById("sifre").value;

    if (kullaniciAdi === "e-ticaretdemo" && sifre === "demo123") {
      window.location.href = "home-page.html";
    } else {
      var errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      errorDiv.textContent = "Girilen bilgiler eksik veya hatalı!";
      errorDiv.style.color = "red";
      errorDiv.style.fontWeight = "bold";
      errorDiv.style.fontSize = "20px";
      errorDiv.style.width = "28%";
      errorDiv.style.marginLeft = "auto";
      errorDiv.style.marginRight = "auto";
      errorDiv.style.textAlign = "center";
      errorDiv.style.border = "1px solid red";
      errorDiv.style.padding = "10px";
      var formContainer = document.querySelector(".form-container");
      formContainer.appendChild(errorDiv);
    }

    setTimeout(function () {
      errorDiv.style.display = "none";
    }, 2500);
  }

  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        yonlendir();
    }
});


  const options = {
    bottom: "32px", // default: '32px'
    right: "32px", // default: '32px'
    left: "unset", // default: 'unset'
    time: "0.4s", // default: '0.3s'
    mixColor: "#fff", // default: '#fff'
    backgroundColor: "#fff", // default: '#fff'
    buttonColorDark: "#100f2c", // default: '#100f2c'
    buttonColorLight: "#fff", // default: '#fff'
    saveInCookies: true, // default: true,
    label: "🌓", // default: ''
    autoMatchOsTheme: true, // default: true
  };

  const darkmode = new Darkmode(options);
  darkmode.showWidget();