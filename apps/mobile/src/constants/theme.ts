export const colors = {
  ink: "#07100D",
  panel: "#0D1814",
  panel2: "#12221D",
  mint: "#8CFFCB",
  lime: "#B8F35A",
  coral: "#FF7A66",
  gold: "#FFD166",
  muted: "#8EA09A",
  white: "#F7FFF9"
};

export const exercises = [
  {
    id: "squat",
    title: "Squat",
    subtitle: "Depth, knee tracking, torso angle",
    accent: colors.lime
  },
  {
    id: "deadlift",
    title: "Deadlift",
    subtitle: "Spine neutrality, hinge, bar path",
    accent: colors.mint
  },
  {
    id: "bench",
    title: "Bench Press",
    subtitle: "Elbow angle, symmetry, shoulder stability",
    accent: colors.gold
  }
] as const;
