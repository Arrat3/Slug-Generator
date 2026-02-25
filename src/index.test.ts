import { describe, it, expect } from "vitest";
import { slugify } from "./index";

describe("Slugify rules", () => {
  // Core behavior
  it('converts "Hello World" -> "hello-world"', () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it('trim + lowercase + collapses spaces : "  Hello WoRLD   " -> "hello-world"', () => {
    expect(slugify("  Hello WoRLD   ")).toBe("hello-world");
  });

  // Separators
  it('replaces underscores : "hello___world" -> "hello-world"', () => {
    expect(slugify("hello___world")).toBe("hello-world");
  });

  it('remove collapses hyphens : "hello---world" -> "hello-world"', () => {
    expect(slugify("hello---world")).toBe("hello-world");
  });

  it('handels spaced hyphens : "hello - world" -> "hello-world"', () => {
    expect(slugify("hello - world")).toBe("hello-world");
  });

  // Sympols & special characters
  it('removes punctuation : "hello, world!" -> "hello-world"', () => {
    expect(slugify("hello, world!")).toBe("hello-world");
  });

  it('removes special characters : "hello@world#test" -> "helloworldtest"', () => {
    expect(slugify("hello@world#test")).toBe("helloworldtest");
  });

  // Edge cases
  it('empty string stay empty : "" -> ""', () => {
    expect(slugify("")).toBe("");
  });

  it('spaces only -> ""', () => {
    expect(slugify("    ")).toBe("");
  });

  it('hyphens only -> ""', () => {
    expect(slugify("---")).toBe("");
  });

  it('"123 456" -> "123-456"', () => {
    expect(slugify("123 456")).toBe("123-456");
  });

  // Unicode
  it('it keeps unicode letters : "Café au lait" -> "café-au-lait"', () => {
    expect(slugify("Café au lait")).toBe("café-au-lait");
  });

  // All test cases in one test
  it('test "   - -- hello$%__ WORLD65------Tést ----    -" -> "hello-world65-tést"', () => {
    expect(slugify("   - -- hello$%__ WORLD65------Tést ----    -")).toBe(
      "hello-world65-tést",
    );
  });
});
