const isCharacter = (val: string): boolean => /^\p{L}$/u.test(val);

const isNumber = (val: string): boolean => !isNaN(Number(val));

export const slugify = (input: string): string => {
  let answer: string = "";

  for (let char of input) {
    let isAllowedChar: boolean =
      char === " " ||
      char === "-" ||
      char === "_" ||
      isNumber(char) ||
      isCharacter(char);
    if (isAllowedChar) answer += char;
  }

  answer = answer
    .replace(/ /g, "-")
    .replace(/_/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLocaleLowerCase();


  return answer;
};
