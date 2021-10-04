export function mapSmilefjesToEmoji(smilefjes: string): string {
  if (smilefjes == "BLID") {
    return "😃";
  } else if (smilefjes == "NØYTRAL") {
    return "😐";
  } else {
    return "😠";
  }
}

export function mapSmilefjesScoreToEmoji(score: number): string {
  switch (score) {
    case 0:
    case 1:
      return "😃";
    case 2:
      return "😐";
    case 3:
      return "😠";
    default:
      return "😃";
  }
}
