"use strict";
export function slugify(input: string): string {
  // Trim + LowerCase
  input = input.toLocaleLowerCase().trim();

  // Check character at index i
  function isCharOrNumber(character: string): boolean {
    // convert to ascii value
    let char: number = character.charCodeAt(0);
    // check if it's a number
    let answer: boolean = char >= 48 && char <= 57;
    // check if it isn't english letter
    answer ||= /^\p{L}$/u.test(character);

    return answer;
  }

  for (let i = 0; i < input.length; i++) {
    let char: string = input[i];

    if (char === " " || char === "-" || char === "_") continue;
    // Ignore special characters
    if (!isCharOrNumber(input[i])) {
      input = input.slice(0, i) + "" + input.slice(i + 1);
      i--;
    }
  }
  // console.log(s);

  input = input.replace(/ /g, "-"); // replace all spaces with -
  input = input.replace(/_/g, "-");
  input = input.replace(/-+/g, "-"); // remove - and keep one
  input = input.replace(/^-+|-+$/g, ""); // remove - at start/end
  // console.log(s);
  return input;
}
