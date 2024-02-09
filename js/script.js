function toggleCard(clickedCard) {
  // Sélectionner toutes les cartes
  let allCards = document.querySelectorAll(".card");

  // Parcourir toutes les cartes
  allCards.forEach((card) => {
    // Vérifier si la carte cliquée est la carte en cours
    if (card === clickedCard) {
      // Si la carte est déjà ouverte, la fermer
      if (card.classList.contains("card-open")) {
        card.classList.replace("card-open", "card-closed");
      } else {
        // Sinon, ouvrir la carte cliquée et fermer les autres
        card.classList.replace("card-closed", "card-open");
      }
    } else {
      // Fermer toutes les autres cartes
      card.classList.remove("card-open");
      card.classList.add("card-closed");
    }
  });
}
// Ajouter un écouteur d'événements à toutes les cartes
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => toggleCard(card));
  // card.addEventListener("mousemove", (event)=>{
  //   card.style.setProperty("--x", event.clientX + "px")
  //   card.style.setProperty("--y", event.clientY + "px")
  //   console.log(event.clientY)
  // })
});