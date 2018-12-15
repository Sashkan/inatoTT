export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => {
      switch (drug.name) {
        case "Herbal Tea":
          drug.benefit = drug.benefit > 50 ? 50 : drug.benefit + 1;
          break;
        case "Magic Pill":
          break;
        case "Fervex":
          if (drug.expiresIn === 0) {
            drug.benefit = 0;
          } else if (drug.expiresIn <= 5) {
            drug.benefit = drug.benefit > 50 ? 50 : drug.benefit + 3;
          } else if (drug.expiresIn <= 10) {
            drug.benefit = drug.benefit > 50 ? 50 : drug.benefit + 2;
          } else {
            drug.benefit = drug.benefit > 50 ? 50 : drug.benefit + 1;
          }
          break;
        case "Dafalgan":
          drug.benefit =
            drug.benefit < 0
              ? 0
              : drug.expiresIn < 0
              ? drug.benefit - 4
              : drug.benefit - 2;
          break;
        default:
          drug.benefit =
            drug.benefit < 0
              ? 0
              : drug.expiresIn < 0
              ? drug.benefit - 2
              : drug.benefit - 1;
      }
      drug.expiresIn = drug.expiresIn - 1;
    });
    return this.drugs;
  }
}
