import { Notify } from "./ConfigSVG";
import { NOTIFY } from "./Constant";
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

  renderNotify: (type) => {
    switch (type) {
      case NOTIFY.SUCCESS:
        return <Notify.Success width="24" height="24" />;
      case NOTIFY.INFO:
        return <Notify.Info width="30" height="30" />;
      default:
        return <Notify.Info width="24" height="24" />;
    }
  },
};
