import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const checkWhiteColor = (color: string) => {
  const arr = color.split(",");
  const first = arr[0].split("(")[1];
  const second = arr[1];
  const third = arr[2].split(")")[1];
  return parseInt(first) > 147 || parseInt(second) > 147 || parseInt(third) > 147;
};

export const generateColors = (n: number) => {
  const colors: string[] = [];
  for (let i = 0; i < n; i++) {
    let color = "";
    do {
      color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255,
      )}, ${Math.floor(Math.random() * 255)})`;
    } while (colors.includes(color) || checkWhiteColor(color));
    colors.push(color);
  }
  return colors;
};
export const cardVariants = {
  offscreen: {
    y: 200,
  },
  onscreen: {
    y: 50,

    transition: {
      type: "spring",

      duration: 0.8,
    },
  },
};
