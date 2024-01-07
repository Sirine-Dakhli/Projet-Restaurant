function valideForm() {
  // Récupération des valeurs des champs du formulaire
  let nom = document.getElementById("nom").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
 

  // Récupération des éléments HTML pour afficher les messages d'erreurs
  let errorNom = document.getElementById("errorNom");
  let errorEmail = document.getElementById("errorEmail");
  let errorPhone = document.getElementById("phoneError");

  // Réinitialisation des messages d'erreur à chaque soumission
  errorNom.textContent = "";
  errorEmail.textContent = "";
  errorPhone.textContent = "";
  // Variable pour suivre l'état de validation du formulaire
  let validation = true;

  // Validation du nom : doit être non vide et d'au moins 4 caractères
  if (!nom || nom.length < 4) {
    errorNom.textContent =
      "Veuillez entrer un nom valide (au moins 4 caractères).";
    validation = false;
  }
  // Validation de l'email : doit correspondre à un format d'email valide
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    errorEmail.textContent = "Veuillez entrer un email valide.";
    validation = false;
  }
  // Validation du numéro de téléphone : doit suivre un format spécifique

  if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(phone)) {
    errorPhone.textContent =
      "Le format du numéro de téléphone n'est pas valide. Utilisez (XXX) XXX-XXXX.";
    validation = false;
  }
  // Si tous les champs sont valides, appele la fonction pour afficher les données

  if (validation) {
    afficherData();
  }

  return validation;
}

function afficherData() {
  // Récupération des valeurs des champs du formulaire
  let nom = document.getElementById("nom").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let people = document.getElementById("people").value;
  let type_evenement = document.getElementById("type_evenement").value;
  let preferences_menu = document.getElementById("preferences_menu").value;
  let preferences_boissons = document.getElementById("preferences_boissons").value;
  let contactResponsable = document.getElementById("contactResponsable").checked
    ? "Oui"
    : "Non";

  // Préparation des données du formulaire pour l'affichage dans la fenêtre modale

  let data =
    "<strong>Nom:</strong> " +
    nom +
    "<br><strong>Email:</strong> " +
    email +
    "<br><strong>Téléphone:</strong> " +
    phone +
    "<br><strong>Date:</strong> " +
    date +
    "<br><strong>Heure:</strong> " +
    time +
    "<br><strong>Nombre de personnes:</strong> " +
    people +
    "<br><strong>Type d'événement:</strong> " +
    type_evenement +
    "<br><strong>Préférences de menu:</strong> " +
    preferences_menu +
    "<br><strong>Préférences de boissons:</strong> " +
    preferences_boissons +
    "<br><strong>Contact par un responsable:</strong> " +
    contactResponsable;

  // Affichage des données dans l'élément modal
  document.getElementById("modalData").innerHTML = data;

  // Création et affichage de la fenêtre modale Bootstrap.
  var modal = new bootstrap.Modal(document.getElementById("dataModal"));
  modal.show();
}
