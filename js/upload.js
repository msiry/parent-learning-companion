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

    // Simulated OCR output — replace with real OCR later
    const mockExtracted = `
      <p><strong>Simulated OCR Result:</strong> What is 3/4 + 1/8?</p>
      <ol>
        <li>Convert 3/4 to 6/8</li>
        <li>Add 6/8 + 1/8 = 7/8</li>
      </ol>
    `;
    output.innerHTML += mockExtracted;
  };

  reader.readAsDataURL(file);
}
