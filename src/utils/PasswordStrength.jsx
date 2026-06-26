export const analyzePassword = (password) => {
  if (!password) {
    return { score: 0, label: "Too weak" };
  }

  let score = 0;

  const length = password.length;

  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  const varietyCount = [hasLower, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;

  // Length scoring (max 50)
  if (length >= 8) score += 15;
  if (length >= 12) score += 15;
  if (length >= 16) score += 20;

  // Variety scoring (max 40)
  score += varietyCount * 10;

  // Bonus for strong mix
  if (length >= 14 && varietyCount >= 3) score += 10;

  if (score > 100) score = 100;

  let label;
  if (score < 30) label = "Too weak";
  else if (score < 50) label = "Weak";
  else if (score < 70) label = "Medium";
  else if (score < 90) label = "Strong";
  else label = "Very strong";

  return { score, label };
};