function validateForm() {
    
    let nom = document.getElementById("nom").value;
    let message = document.querySelector("[name='message']").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
   

    let errorNom = document.getElementById("errorNom");
    let errorMessage = document.getElementById("errorMessage");
    let errorEmail = document.getElementById("errorEmail");
    let errorPhone = document.getElementById("phoneError");

    let validationStatus = true;

    // Validation du nom
    if (nom.length < 2 || nom.length > 20 || !/^[a-zA-Z]+$/.test(nom)) {
        errorNom.textContent = "Le nom doit contenir entre 2 et 20 lettres.";
        validationStatus = false;
    } 

    // Validation du message
    if (message.length < 2 || message.length > 200) {
        errorMessage.textContent = "Le message doit contenir entre 2 et 200 lettres.";
        validationStatus = false;
    } 

    // Validation de l'email
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorEmail.textContent = "Le format du courriel n'est pas valide.";
        validationStatus = false;
    } 

    // Validation du téléphone
    if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(phone)) {
        errorPhone.textContent =
          "Le format du numéro de téléphone n'est pas valide. Utilisez (XXX) XXX-XXXX.";
        validationStatus = false;
      }

    if (validationStatus) {
        displayFormData();
      }
      // Retourner le statut de validation
      return validationStatus;;
}

  
  // Fonction pour afficher les données validées du formulaire

  function displayFormData() {
	let nom = document.getElementById("nom").value;
    let message = document.querySelector("[name='message']").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date");
    let time = document.getElementById("time");
    let people = document.getElementById("people");
    let dataToDisplay = "<strong>Nom:</strong> " + nom + 
                    "<br><strong>Email:</strong> " + email + 
                    "<br><strong>Téléphone:</strong> " + phone + 
                    "<br><strong>Date:</strong> " + date.value + 
                    "<br><strong>Heure:</strong> " + time.value + 
                    "<br><strong>Nombre de personnes:</strong> " + people.value +
                    "<br><strong>Message:</strong> " + message;

                        document.getElementById("modalData").innerHTML = dataToDisplay;

                        // bootstrap
                        var modal = new bootstrap.Modal(document.getElementById("dataModal"));
                        modal.show();
                      }

