const filterBtn = document.querySelector("#filter-btn");
const clearBtn = document.querySelector("#clear-btn");
const typeCheckboxes = document.querySelectorAll('input[type="checkbox"][id^="type-"]');
const colorCheckboxes = document.querySelectorAll('input[type="checkbox"][id^="color-"]');
const sizeSelect = document.querySelector("#size-select");
const imageCards = document.querySelectorAll(".image-card");

filterBtn.addEventListener("click", function() {
  let selectedTypes = [];
  let selectedColors = [];
  let selectedSize = sizeSelect.value;

  typeCheckboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      selectedTypes.push(checkbox.nextElementSibling.textContent);
    }
  });

  colorCheckboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      selectedColors.push(checkbox.nextElementSibling.textContent);
    }
  });

  imageCards.forEach(function(card) {
    if (
      (selectedTypes.length && !selectedTypes.includes(card.dataset.type)) ||
      (selectedColors.length && !selectedColors.includes(card.dataset.color)) ||
      (selectedSize && selectedSize !== card.dataset.size)
    ) {
      card.style.display = "none";
    } else {
      card.style.display = "block";
    }
  });
});

clearBtn.addEventListener("click", function() {
  typeCheckboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });

  colorCheckboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });

  sizeSelect.value = "";

  imageCards.forEach(function(card) {
    card.style.display = "block";
  });
});