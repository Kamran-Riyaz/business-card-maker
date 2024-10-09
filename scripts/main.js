function saveInput() {
  const name = document.getElementById("name").value.trim();
  const profession = document.getElementById("profession").value.trim();
  const email = document.getElementById("email").value.trim();
  const website = document.getElementById("website").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name && !profession && !email && !website && !phone) {
    alert("All fields are empty. Please fill in at least one field.");
  } else {
    localStorage.setItem("name", name);
    localStorage.setItem("profession", profession);
    localStorage.setItem("email", email);
    localStorage.setItem("website", website);
    localStorage.setItem("phone", phone);

    window.location.href = "business-card.html";
  }
}

function clearInput() {
  const fields = ["name", "profession", "email", "website", "phone"];
  fields.forEach((field) => (document.getElementById(field).value = ""));
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
});
