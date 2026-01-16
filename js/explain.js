function explainThreeWays(question) {
  const q = question.toLowerCase();

  if (q.includes("3/4 + 1/8")) {
    return {
      textbook: "To add 3/4 and 1/8, convert them to have the same denominator: 3/4 = 6/8. Then, 6/8 + 1/8 = 7/8.",
      analogy: "Imagine you have 3 out of 4 pizza slices, and your friend gives you 1 out of 8 more — together, you now have 7 out of 8 slices.",
      realWorld: "If you jog 3/4 of a mile and then jog another 1/8 of a mile, you’ve gone 7/8 of a mile total."
    };
  }

  if (q.includes("5 x 3") || q.includes("5 times 3")) {
    return {
      textbook: "5 × 3 is repeated addition: 5 groups of 3, or 3 + 3 + 3 + 3 + 3 = 15.",
      analogy: "Think of 5 boxes with 3 apples in each. Altogether, that’s 15 apples.",
      realWorld: "If you earn $3 every day for 5 days, you’ll have $15 total."
    };
  }

  return {
    textbook: "Explanation not available for this question.",
    analogy: "We don't have a fun analogy for this one yet.",
    realWorld: "Real-world example coming soon!"
  };
}
