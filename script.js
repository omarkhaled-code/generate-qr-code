let box = document.querySelector(".box");
let inputValue = document.getElementById("qr-text");
let qrCard = document.getElementById("qr-card");
let btn = document.getElementById("btn");
let qr = document.getElementById("qr");
let downloadLink = document.getElementById("download");
let QR_URL = "";
const generateQRCode = () => {
  if (inputValue.value.length > 0) {
    QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue.value}`;
    qr.src = QR_URL;
    box.classList.add("active");
    downloadLink.classList.add("active");
    downloadLink.href = QR_URL;
    downloadLink.download = `${inputValue.value} QR-Code`;
  } else {
    inputValue.classList.add("error");
    downloadLink.classList.remove("active");
    setTimeout(() => {
      inputValue.classList.remove("error");
    }, 1000);
  }
};

btn.addEventListener("click", () => {
  generateQRCode();
});
