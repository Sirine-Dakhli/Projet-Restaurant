function valideForm() {
    

    
       // Récupération des valeurs
	   let nom = document.getElementById("nom").value;
	   let message = document.querySelector("[name='message']").value;
	   let email = document.getElementById("email").value;
	   let sujet = document.getElementById("sujet").value;
   

    // Récupération des éléments d'erreur
    let errorNom = document.getElementById("errorNom");
    let errorMessage = document.getElementById("errorMessage");
    let errorEmail = document.getElementById("errorEmail");
    let errorSujet = document.getElementById("sujetError");

	   // Initialisation des messages d'erreur à vide
	   errorNom.textContent = '';
	   errorMessage.textContent = '';
	   errorEmail.textContent = '';
	   errorSujet.textContent = '';

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
	  // Validation du message
	  if (sujet.length < 2 || sujet.length > 200) {
        errorSujet.textContent = "Le sujet doit contenir entre 2 et 200 lettres.";
        validationStatus = false;
    } 

    // Validation de l'email
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorEmail.textContent = "Le format du courriel n'est pas valide.";
        validationStatus = false;
    } 

   

    if (validationStatus) {
        afficherData();
      }
      // Retourner le statut de validation
      return validationStatus;;
}

  
  // Fonction pour afficher les données validées du formulaire

  function afficherData() {
	let nom = document.getElementById("nom").value;
    let message = document.querySelector("[name='message']").value;
    let email = document.getElementById("email").value;
    let sujet = document.getElementById("sujet").value;
  
    
    let data = "<strong>Nom:</strong> " + nom + 
                    "<br><strong>Email:</strong> " + email + 
                    "<br><strong>Sujet:</strong> " + sujet + 
                    "<br><strong>Message:</strong> " + message;

                        document.getElementById("modalData").innerHTML = data;

                        // bootstrap
                        var modal = new bootstrap.Modal(document.getElementById("dataModal"));
                        modal.show();
                      }

