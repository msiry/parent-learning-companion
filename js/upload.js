function handleImageUpload(event) {
  const output = document.getElementById("ocr-result");
  const file = event.target.files[0];

  if (!file) {
    output.innerHTML = "<p style='color:red;'>No file selected.</p>";
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const img = document.createElement("img");
    img.src = e.target.result;
    img.style.maxWidth = "100%";
    img.alt = "Uploaded homework preview";

    output.innerHTML = "<p><strong>Preview:</strong></p>";
    output.appendChild(img);

    // OCR starts here 🧠
    extractTextFromImage(file, (text) => {
      output.innerHTML += `
        <h3>🧠 OCR Result:</h3>
        <pre style="white-space: pre-wrap;">${text}</pre>
      `;
    });
  };

  reader.readAsDataURL(file);
}
