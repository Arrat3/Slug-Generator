const isCharacter = (val: string): boolean => /^\p{L}$/u.test(val);

const isNumber = (val: string): boolean => !isNaN(Number(val));

const collapseHyphens = (s: string): string => s.replace(/-+/g, "-");

const trimHyphens = (s: string): string => s.replace(/^-+|-+$/g, "");

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

  answer = trimHyphens(
    collapseHyphens(answer.replace(/ /g, "-").replace(/_/g, "-")),
  ).toLocaleLowerCase();

  return answer;
};
