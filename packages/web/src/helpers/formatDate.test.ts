import formatDate from "./formatDate";

describe("formatDate", () => {
  it("returns message, if no Date passed", () => {
    const result = formatDate(undefined);

    expect(result).toBe("Date was not provided or undefined!");
  });

  it("returns date", () => {
    const result = formatDate(new Date());

    expect(result).not.toBeNull();
    expect(result).not.toBeUndefined();
    expect(result).not.toBeFalsy();
    expect(result).not.toBeNaN();
    expect(result).not.toBeNull();
    expect(result).not.toBe("Date was not provided or undefined!");
  });

  it("returns date with passed separator", () => {
    const result = formatDate(new Date(), ":");

    expect(result).not.toBeNull();
    expect(result).not.toBeUndefined();
    expect(result).not.toBeFalsy();
    expect(result).not.toBeNaN();
    expect(result).not.toBeNull();

    expect(result).toContain(":");
  });
});
