function generateAnswerKey(questionText) {
  const lowerQ = questionText.toLowerCase();
  let answer = "🤖 Answer logic not implemented yet.";

  if (lowerQ.includes("3/4") && lowerQ.includes("1/8")) {
    answer = `
      <p><strong>Answer:</strong> 3/4 + 1/8 = <mark>7/8</mark></p>
      <ol>
        <li>Convert 3/4 to 6/8</li>
        <li>Add 6/8 + 1/8 = 7/8</li>
      </ol>
    `;
  } else if (lowerQ.includes("5 x 3")) {
    answer = `
      <p><strong>Answer:</strong> 5 × 3 = <mark>15</mark></p>
      <ol>
        <li>5 groups of 3 = 3 + 3 + 3 + 3 + 3</li>
        <li>Total = 15</li>
      </ol>
    `;
  }

  return answer;
}
