function changeLanguage() {
  var languageSelect = document.getElementById("languageSelect");
  var selectedLanguage = languageSelect.options[languageSelect.selectedIndex].value;

  if (selectedLanguage === "it") {
    window.location.href = "index.html";
  } else if (selectedLanguage === "en") {
    window.location.href = "index_en.html";
  }
}



document.addEventListener("DOMContentLoaded", function() {
    var languageSelect = document.getElementById("languageSelect");
    var selectedLanguage = languageSelect.options[languageSelect.selectedIndex].value;
    var lastUpdate = document.getElementById("lastUpdate");
    var currentDate = new Date();
 

    if (selectedLanguage === "it") {
      var monthNames = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
             "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
      var formattedDate = currentDate.getDate() + " " + monthNames[currentDate.getMonth()] + 
          " " + currentDate.getFullYear();
      lastUpdate.textContent = "Ultimo Aggiornamento: " + formattedDate;  
    } else if (selectedLanguage === "en") {
      var monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
      var formattedDate = monthNames[currentDate.getMonth()] + " " + currentDate.getDate() 
            + ", " + currentDate.getFullYear();
      lastUpdate.textContent = "Last Update: " + formattedDate;   
    }
});