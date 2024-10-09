function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("name");
  const profession = localStorage.getItem("profession");
  const email = localStorage.getItem("email");
  const website = localStorage.getItem("website");
  const phone = localStorage.getItem("phone");

  if (name || profession || email || website || phone) {
    if (name) document.getElementById("name").textContent = name.toUpperCase();
    if (profession)
      document.getElementById("profession").textContent = `* ${toTitleCase(
        profession
      )} *`;
    if (email) document.getElementById("email").textContent = email;
    if (website) document.getElementById("website").textContent = website;
    if (phone) document.getElementById("phone").textContent = phone;
  }
});

function downloadPDF() {
  const downloadButton = document.getElementById("download-button");
  downloadButton.style.display = "none"; // Hide the button before generating PDF
  const element = document.getElementById("pdf-content");

  html2pdf()
    .from(element)
    .set({
      margin: [0, 0, 0, 0],
      filename: "business-card.pdf",
      image: { type: "jpeg", quality: 1.0 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    })
    .then(() => {
      downloadButton.style.display = "inline-block"; // Show the button again after generating PDF
    })
    .save();
}

function downloadImage() {
  const element = document.getElementById("pdf-content");

  html2canvas(element, { scale: 4 }).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "business-card.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
