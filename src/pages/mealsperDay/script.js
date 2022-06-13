let cards = document.getElementsByTagName('li')
let nextButton = document.getElementById('next-button');

function cardSelection() {

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function() {
          let current = document.getElementsByClassName("active");
      
          if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
          }
      
          this.className += " active";
        });
      }
}

cardSelection();

nextButton.onclick = function() {

    let selectedMealsPerDay = document.getElementsByClassName("active")

    if(selectedMealsPerDay.length === 0) {
      localStorage.setItem("selectedMealsPerDay", 1)
    } else {
      localStorage.setItem("selectedMealsPerDay", selectedMealsPerDay[0].innerText.substring(0, 1))
    }

    location.href = "../../pages/mealChose"
}