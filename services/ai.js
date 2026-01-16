function getAIExplanation(questionText) {
  const q = questionText.toLowerCase();

  if (q.includes("3/4") && q.includes("1/8")) {
    return {
      answer: "The sum of 3/4 and 1/8 is 7/8.",
      explain: {
        textbook: "To add 3/4 and 1/8, use common denominators. 3/4 becomes 6/8, then add 6/8 + 1/8 = 7/8.",
        analogy: "You have 3 out of 4 pizza slices. A friend gives you 1 out of 8 more slices. Now you have 7 out of 8 slices.",
        realWorld: "If you run 3/4 mile and then 1/8 mile more, you’ve run 7/8 mile total."
      }
    };
  }

  return {
    answer: "Sorry, this question is not recognized by the AI module yet.",
    explain: {
      textbook: "No explanation available.",
      analogy: "No analogy found.",
      realWorld: "Real-world example not available."
    }
  };
}
