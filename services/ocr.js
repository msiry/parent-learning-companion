function extractTextFromImage(file, callback) {
  const output = document.getElementById("ocr-result");
  output.innerHTML = "<p>🕐 Scanning image for text...</p>";

  Tesseract.recognize(
    file,
    'eng',
    {
      logger: m => {
        if (m.status === 'recognizing text') {
          output.innerHTML = `<p>🔍 OCR Progress: ${Math.round(m.progress * 100)}%</p>`;
        }
      }
    }
  ).then(({ data: { text } }) => {
    callback(text);
  }).catch(err => {
    output.innerHTML = "<p style='color:red;'>❌ OCR failed to process the image.</p>";
    console.error("OCR error:", err);
  });
}
