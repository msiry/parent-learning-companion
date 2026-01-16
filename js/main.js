window.addEventListener("DOMContentLoaded", () => {
  navigate("home");
});

function navigate(view) {
  window.currentView = view;
  if (typeof renderView === "function") {
    renderView(view);
  } else {
    console.error("renderView is not defined");
  }
}
