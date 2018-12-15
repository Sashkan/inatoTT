import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn for unreferenced drugs", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});

describe("Doliprane", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Doliprane", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Doliprane", 1, 2)]
    );
  });
});


describe("Fervex", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Fervex", 6, 7)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 5, 9)]
    );
  });


  it("should handle benefits if close to expiration date", () => {
    expect(new Pharmacy([new Drug("Fervex", 3, 7)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 2, 10)]
    );
  });
});

describe("Magic Pill", () => {
  it("should maintain the benefit", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 1, 3)]
    );
  });
});

describe("Dafalgan", () => {
  it("should maintain the benefit twice as fast", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 1, 1)]
    );
  });
});
