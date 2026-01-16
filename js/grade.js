async function renderGradeSelector() {
  const container = document.getElementById("grade-subject-selector");

  try {
    const res = await fetch("data/subjects.json");
    const data = await res.json();

    const grades = Object.keys(data.grades);
    const gradeSelect = document.createElement("select");
    gradeSelect.id = "grade-select";
    gradeSelect.innerHTML = `<option value="">-- Choose Grade --</option>`;
    grades.forEach(grade => {
      const option = document.createElement("option");
      option.value = grade;
      option.textContent = grade;
      gradeSelect.appendChild(option);
    });

    const subjectSelect = document.createElement("select");
    subjectSelect.id = "subject-select";
    subjectSelect.innerHTML = `<option value="">-- Choose Subject --</option>`;

    const selectionResult = document.createElement("p");
    selectionResult.id = "selected-grade-subject";

    gradeSelect.addEventListener("change", () => {
      const selectedGrade = gradeSelect.value;
      const subjects = data.grades[selectedGrade];
      subjectSelect.innerHTML = `<option value="">-- Choose Subject --</option>`;
      if (subjects) {
        subjects.forEach(subject => {
          const option = document.createElement("option");
          option.value = subject;
          option.textContent = subject;
          subjectSelect.appendChild(option);
        });
      }
    });

    subjectSelect.addEventListener("change", () => {
      const grade = gradeSelect.value;
      const subject = subjectSelect.value;
      if (grade && subject) {
        selectionResult.textContent = `Selected: ${grade} - ${subject}`;
      }
    });

    container.appendChild(gradeSelect);
    container.appendChild(subjectSelect);
    container.appendChild(selectionResult);
  } catch (error) {
    console.error("Failed to load subjects:", error);
    container.innerHTML = `<p style="color:red;">Failed to load grade/subject data.</p>`;
  }
}
