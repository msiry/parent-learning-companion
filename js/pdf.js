function downloadPDF() {
  const element = document.body;
  const opt = {
    margin:       0.5,
    filename:     'parent-learning-output.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  // Check if html2pdf is loaded
  if (typeof html2pdf !== "undefined") {
    html2pdf().from(element).set(opt).save();
  } else {
    alert("PDF library not loaded. Make sure to include html2pdf library.");
  }
}
