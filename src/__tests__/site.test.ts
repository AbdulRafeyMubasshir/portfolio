import {
  certifications,
  DEFAULT_LENS,
  LENSES,
  factsByLens,
  hero,
  parseLens,
  berry,
  tube,
} from "@/content/site";

describe("parseLens", () => {
  it.each(LENSES)("accepts %s", (lens) => expect(parseLens(lens)).toBe(lens));
  it.each([undefined, null, "", "sales", "ENGINEERING", "<script>"])(
    "falls back to the default for %s",
    (value) => expect(parseLens(value)).toBe(DEFAULT_LENS),
  );
});

describe("content", () => {
  it("gives every lens an intro, four facts and a summary for each case study", () => {
    for (const lens of LENSES) {
      expect(hero.intro[lens].length).toBeGreaterThan(40);
      expect(factsByLens[lens]).toHaveLength(4);
      expect(new Set(factsByLens[lens].map((f) => f.id)).size).toBe(4);
      expect(berry.summary[lens]).toBeTruthy();
      expect(tube.summary[lens]).toBeTruthy();
    }
  });

  it("leads with the fact that matters most to each audience", () => {
    expect(factsByLens.engineering[0]!.id).toBe("apps");
    expect(factsByLens.solutions[0]!.id).toBe("deal");
    expect(factsByLens.delivery[0]!.id).toBe("workers");
  });
});

it("lists the three Salesforce certifications and the deep learning course", () => {
  expect(certifications.filter((c) => c.issuer === "Salesforce")).toHaveLength(3);
  expect(certifications.some((c) => c.name.includes("Deep Learning"))).toBe(true);
});
