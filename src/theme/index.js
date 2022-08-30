const theme = {
  fonts: {
    base: 'Slack-Larsseit, "Helvetica Neue", Helvetica, "Segoe UI", Tahoma, Arial, Sans-Serif',
    circular:
      'Slack-Circular-Pro, "Helvetica Neue", Helvetica, "Segoe UI", Tahoma, Arial, Sans-Serif',
  },
  primary: {
    100: "#592466",
    200: "#611f69",
    300: " #4a154b",
  },
  accent: {
    cream: "#f4ede4",
    blue: {
      100: "#cddcf2",
      200: "#1264a3",
    },
  },
  neutral: {
    black: {
      100: "#1d1d1d",
      200: "#454245",
      300: "#555555 ",
      400: "#696969",
      500: "#000000",
    },
  },
  sizes: {
    desktop: `min-width: 1024px`,
    tablet: `min-width: 768px`,
  },
};

console.log(theme.accent.cream);

export default theme;
