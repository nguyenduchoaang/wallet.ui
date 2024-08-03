import { Line } from "./ConfigSVG";

const CardArray = [
  {
    name: "Christopher Victory",
    address: "0x4b5e9f5f",
    balance: "0.0001",
    color1: "rgba(204, 224, 255, 1)",
    color2: "rgba(138, 46, 255, 1)",
  },
  {
    name: "Amanda Johnson",
    address: "0x654bq2dwd",
    balance: "0.0001",
    color1: "rgba(248, 255, 237, 1)",
    color2: "rgba(73, 221, 105, 1)",
  },
  {
    name: " John Doe",
    address: "0x90345295f",
    balance: "0.0001",
    color1: "rgba(204, 224, 255, 1)",
    color2: "rgba(138, 46, 255, 1)",
  },
];

const ConfigMenu = [
  {
    name: "History",
    icon: <Line.LineUp width="24" height="24" />,
  },
  {
    name: "Send",
    icon: <Line.Send width="24" height="24" />,
  },
  {
    name: "Receive",
    icon: <Line.Receive width="24" height="24" />,
  },
];

export { CardArray, ConfigMenu };
