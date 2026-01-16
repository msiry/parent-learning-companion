function updateStars() {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  let stars = 0;

  checkboxes.forEach(cb => {
    if (cb.checked) stars++;
  });

  const display = document.getElementById("star-count");
  display.textContent = `Stars: ⭐ ${stars}`;
}
