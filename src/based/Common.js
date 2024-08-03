export const Common = {
  renderBackgroundLinear: (indexItem) => {
    if (indexItem % 3 === 0) {
      return {
        background:
          "linear-gradient(to bottom, rgba(204, 224, 255, 1), rgba(138, 46, 255, 1))",
      };
    } else if (indexItem % 3 === 1) {
      return {
        background:
          "linear-gradient(to bottom, rgba(248, 255, 237, 0.5), rgba(73, 221, 105, 1))",
      };
    } else {
      return {
        background: "linear-gradient(to bottom, #FF69B4, #FF8C00)",
      };
    }
  },
};
