//  fonction du menu .
function menu() {
  // Sélectionne tous les éléments avec la classe '.menu-add' 
  var menuItems = document.querySelectorAll(".menu-add");
  
  // Boucle à travers chaque élément du menu trouvé.
  for (var i = 0; i < menuItems.length; i++) {
    // Appelle la fonction 'addClickListener' pour chaque élément
    addClickListener(menuItems[i]);
  }
}

// fonction attache un gestionnaire de clic 
function addClickListener(item) {
  // Attache un écouteur d'événement 'click' à l'élément passé en argument.
  item.addEventListener("click", function() {
    
    MenuAjouter(item);
  });
}

// Cette fonction est appelée chaque fois qu'un élément de menu est cliqué.
function MenuAjouter(item) {
  // Trouve l'élément parent de l'élément du menu.
  var menuItem = item.parentElement;
  
  // Récupère le nom de l'article du menu  
  var name = menuItem.querySelector(".menu-name").textContent;
  
  // Récupère le prix de l'article du menu 
  var price = menuItem.querySelector(".menu-price").textContent;
  
  // Appelle la fonction 'ajouterOrder' avec le nom et le prix récupérés, ajoutant ainsi l'article à la commande.
  ajouterOrder(name, price);
}


// Initialiser les gestionnaires de clic des éléments de menu
menu();

// Fonction pour ajouter un article à la commande
function ajouterOrder(name, price) {
  // Crée une nouvelle section pour l'article commandé.
  var orderItem = document.createElement("section");

  // Crée et configure le div pour le nom.
  var nameDiv = document.createElement("div");
  nameDiv.textContent = name;
  nameDiv.className = "big";
  orderItem.appendChild(nameDiv);

  // Crée  le div pour la confirmation.
  var confirmDiv = document.createElement("div");
  confirmDiv.textContent = "Commande ajoutée";
  confirmDiv.className = "small";
  orderItem.appendChild(confirmDiv);

  // Crée  le div pour le prix.
  var priceDiv = document.createElement("div");
  priceDiv.textContent = price;
  priceDiv.className = "medium";
  orderItem.appendChild(priceDiv);

  // Ajoute la section créée à la commande.
  document.getElementById("footerdiv").appendChild(orderItem);

  // Met à jour le coût total de la commande.
  modifierTotal();
}

// Fonction pour mettre à jour le coût total de la commande
function modifierTotal() {
  var total = 0;
  var costs = document.getElementsByClassName("medium");

  for (var i = 0; i < costs.length; i++) {
    var cost = costs[i].textContent.replace("$", "");
    total += parseFloat(cost);
  }

  var totalText = "$" + total;
  document.getElementById("totalCost").textContent = totalText;
}

// Fonction qui gère l'action de cliquer sur le bouton de commande
function PaymentCommande() {
  var payment = document.getElementById("payment");
  payment.classList.toggle("hide");
}

// Attacher l'événement de clic au bouton de commande
var orderButton = document.getElementById("button");
orderButton.addEventListener("click", PaymentCommande);

// Fonction pour gérer la soumission du formulaire
function FormSubmit(event) {
  event.preventDefault();
  Alert();
  TotalCost();
  visibilitéElement();
}

// Afficher une alerte indiquant que le paiement a été réussi
function Alert() {
  alert("Votre paiement a été effectué avec succès. Merci de votre commande.");
}

// Réinitialiser le coût total à $0
function TotalCost() {
  document.getElementById("totalCost").textContent = "$0";
}

// Basculer la visibilité des éléments spécifiés
function visibilitéElement() {
  document.getElementById("payment").classList.toggle("hide");
  document.getElementById("first").classList.toggle("hide");
  document.getElementById("last").classList.toggle("hide");
}

// Attacher la fonction de gestion de soumission au formulaire
var form = document.querySelector("form");
form.addEventListener("submit", FormSubmit);