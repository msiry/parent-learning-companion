function renderView(view) {
  const app = document.getElementById("app-view");
  app.innerHTML = ""; // Clear previous view

  switch (view) {
    case "home":
      app.innerHTML = `
        <section>
          <h2>Welcome 👋</h2>
          <p>Select a grade and subject to begin helping your child with their homework.</p>
          <div id="grade-subject-selector"></div>
        </section>
      `;
      if (typeof renderGradeSelector === "function") {
        renderGradeSelector();
      }
      break;

    case "upload":
      app.innerHTML = `
        <section>
          <h2>📷 Upload Homework</h2>
          <p>Take a photo or upload an image of your child's assignment.</p>
          <input type="file" accept="image/*" onchange="handleImageUpload(event)" />
          <div id="ocr-result"></div>
        </section>
      `;
      break;

    case "reward":
      app.innerHTML = `
        <section>
          <h2>⭐ Reward Chart</h2>
          <ul>
            <li><input type="checkbox" onchange="updateStars()"> Completed Homework</li>
            <li><input type="checkbox" onchange="updateStars()"> 15 Minutes Reading</li>
            <li><input type="checkbox" onchange="updateStars()"> Practiced Math Facts</li>
          </ul>
          <div class="reward-progress" id="star-count">Stars: ⭐ 0</div>
        </section>
      `;
      break;

    default:
      app.innerHTML = "<p>Page not found.</p>";
  }
}
