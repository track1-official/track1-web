import { DefaultTheme } from "styled-components";

const colors = {
  main: "#5200FF",
  sub1: "#43FF8E",
  sub2: "#E965FF",
  sub3: "#0D0E11",
  gray1: "#D9D9D9",
  gray2: "#9EA1AB",
  gray3: "#535559",

  gray4: "#313338",
  gray5: "#1E2025",
  gray6: "#141517",

  white: "#FFFFFF",
  black: "#0D0E11",
  red: "#FF4F4F",
};

export type ColorsTypes = typeof colors;

interface Font {
  family: boolean;
  weight: number;
  size: number;
  lineHeight: number | string;
  renewal?: boolean;
}

function FONT({ family, weight, size, lineHeight, renewal }: Font): string {
  return `
    font-family: ${renewal ? "Alexandria" : family ? "YDestreet" : "Pretendard"};
    font-weight : ${weight};
    font-size : ${size}rem;
    line-height : ${typeof lineHeight === "string" ? lineHeight : lineHeight + "rem"};
    `;
}

const fonts = {
  hashtag: FONT({ family: true, weight: 300, size: 1.5, lineHeight: 1.9 }),
  cations: FONT({ family: true, weight: 400, size: 1.6, lineHeight: 1.9 }),
  body1: FONT({ family: true, weight: 300, size: 1.8, lineHeight: 2.3 }),
  comment: FONT({ family: false, weight: 400, size: 1.8, lineHeight: 3.5 }),
  inputTitle: FONT({ family: true, weight: 400, size: 1.7, lineHeight: 1.9 }),
  description: FONT({ family: false, weight: 400, size: 1.6, lineHeight: 2.8 }),
  player_title: FONT({ family: true, weight: 700, size: 2, lineHeight: 2.6 }),
  id: FONT({ family: true, weight: 300, size: 2, lineHeight: 2.6 }),
  caption_large: FONT({ family: true, weight: 300, size: 3, lineHeight: 3.9 }),
  title: FONT({ family: true, weight: 300, size: 5, lineHeight: 6.5 }),
  input: FONT({ family: false, weight: 400, size: 2, lineHeight: 3.4 }),

  message: FONT({ family: false, weight: 400, size: 1.6, lineHeight: 1.9 }),
  typography_title: FONT({ family: false, weight: 700, size: 2, lineHeight: 2 }),
  typography_intro: FONT({ family: false, weight: 600, size: 1.5, lineHeight: 2.4 }),
  typography_content: FONT({ family: false, weight: 500, size: 1.5, lineHeight: 2.4 }),
  checkbox: FONT({ family: false, weight: 400, size: 1.6, lineHeight: 1.6 }),

  box_title: FONT({ family: true, weight: 300, size: 2.4, lineHeight: 2 }),

  // 추가 폰트

  alexandria_heading100: FONT({ family: true, weight: 400, size: 9.8, lineHeight: "normal", renewal: true }),
  alexandria_heading98: FONT({ family: true, weight: 400, size: 9.8, lineHeight: "normal", renewal: true }),
  alexandria_heading90: FONT({ family: true, weight: 400, size: 9, lineHeight: "normal", renewal: true }),
  alexandria_heading38: FONT({ family: true, weight: 400, size: 3.8, lineHeight: "normal", renewal: true }),
  alexandria_heading22: FONT({ family: true, weight: 500, size: 2.2, lineHeight: "normal", renewal: true }),
  alexandria_heading20: FONT({ family: true, weight: 500, size: 2, lineHeight: "normal", renewal: true }),

  pretendard_heading70: FONT({ family: true, weight: 600, size: 7, lineHeight: "normal", renewal: true }),

  alexandria_text148: FONT({ family: true, weight: 400, size: 14.8, lineHeight: "normal", renewal: true }),
  alexandria_text30: FONT({ family: true, weight: 400, size: 3, lineHeight: "normal", renewal: true }),

  pretendard_text40: FONT({ family: false, weight: 500, size: 4, lineHeight: 7.2 }),
  pretendard_text30: FONT({ family: false, weight: 500, size: 3, lineHeight: "normal" }),
  pretendard_text28: FONT({ family: false, weight: 400, size: 2.8, lineHeight: 4.76 }),
  pretendard_text25: FONT({ family: false, weight: 400, size: 2.5, lineHeight: 4.375 }),
  pretendard_text25_700: FONT({ family: false, weight: 700, size: 2.5, lineHeight: "normal" }),
  pretendard_text22: FONT({ family: false, weight: 500, size: 2.2, lineHeight: "normal" }),
  pretendard_text20: FONT({ family: false, weight: 400, size: 2, lineHeight: "normal" }),
  pretendard_text12: FONT({ family: false, weight: 500, size: 1.2, lineHeight: "1.432" }),

  text22: FONT({ family: true, weight: 400, size: 2.2, lineHeight: "normal", renewal: true }),
  text20: FONT({ family: true, weight: 400, size: 2, lineHeight: "normal", renewal: true }),
  text18: FONT({ family: true, weight: 400, size: 1.8, lineHeight: "normal", renewal: true }),
};

export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
