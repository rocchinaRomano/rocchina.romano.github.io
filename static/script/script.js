function changeLanguage() {
  var languageSelect = document.getElementById("languageSelect");
  var selectedLanguage = languageSelect.options[languageSelect.selectedIndex].value;
  
  if (selectedLanguage === "it") {
    window.location.href = "index.html";
  } else if (selectedLanguage === "en") {
    window.location.href = "index_en.html";
  }
}
