import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Facts } from "@/components/Facts";
import { HeroIntro } from "@/components/HeroIntro";
import { LensSwitch } from "@/components/LensSwitch";
import { hero } from "@/content/site";
import { LensProvider } from "@/lib/lens";

function renderPage(initial: "engineering" | "solutions" | "delivery" = "engineering") {
  return render(
    <LensProvider initial={initial}>
      <LensSwitch />
      <HeroIntro />
      <Facts />
    </LensProvider>,
  );
}

const firstFact = () => screen.getByLabelText("Highlights").querySelector("dt")?.textContent;

beforeEach(() => window.history.replaceState(null, "", "/"));

describe("lens switch", () => {
  it("renders the lens it was given, with no flash of another", () => {
    renderPage("solutions");
    expect(screen.getByRole("radio", { name: "Solutions & sales" })).toHaveAttribute(
      "aria-checked",
      "true",
    );
    expect(screen.getByTestId("hero-intro")).toHaveTextContent(hero.intro.solutions);
    expect(firstFact()).toBe("£20,000");
  });

  it("re-tailors the content and the shareable URL on click", async () => {
    renderPage();
    await userEvent.click(screen.getByRole("radio", { name: "Delivery & customer success" }));
    expect(screen.getByTestId("hero-intro")).toHaveTextContent(hero.intro.delivery);
    expect(firstFact()).toBe("295+");
    expect(new URL(window.location.href).searchParams.get("for")).toBe("delivery");
  });

  it("works as a radio group from the keyboard", async () => {
    renderPage();
    const engineering = screen.getByRole("radio", { name: "Engineering" });
    expect(engineering).toHaveAttribute("tabIndex", "0");
    engineering.focus();
    await userEvent.keyboard("{ArrowRight}");
    const solutions = screen.getByRole("radio", { name: "Solutions & sales" });
    expect(solutions).toHaveFocus();
    expect(solutions).toHaveAttribute("aria-checked", "true");
    await userEvent.keyboard("{ArrowLeft}{ArrowLeft}");
    expect(screen.getByRole("radio", { name: "Delivery & customer success" })).toHaveFocus();
  });
});
