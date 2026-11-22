import { act, render, screen } from "@testing-library/react";
import { RailNav } from "@/components/RailNav";

type Callback = (entries: Partial<IntersectionObserverEntry>[]) => void;
let trigger: Callback = () => {};

beforeEach(() => {
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      constructor(cb: Callback) {
        trigger = cb;
      }
      observe() {}
      disconnect() {}
    },
  );
});
afterEach(() => vi.unstubAllGlobals());

const stations = [
  { id: "a", label: "Start" },
  { id: "b", label: "Berry" },
  { id: "c", label: "Contact" },
];

it("marks stations passed, current and ahead as you scroll", () => {
  render(
    <>
      <RailNav stations={stations} />
      {stations.map((s) => (
        <section key={s.id} id={s.id} />
      ))}
    </>,
  );
  expect(screen.getByRole("link", { name: "Start" })).toHaveAttribute("aria-current", "location");

  act(() => trigger([{ isIntersecting: true, target: document.getElementById("b")! }]));

  const berry = screen.getByRole("link", { name: "Berry" });
  expect(berry).toHaveAttribute("aria-current", "location");
  expect(screen.getByRole("link", { name: "Start" }).parentElement).toHaveAttribute(
    "data-state",
    "passed",
  );
  expect(screen.getByRole("link", { name: "Contact" }).parentElement).toHaveAttribute(
    "data-state",
    "ahead",
  );
  expect(berry).toHaveAttribute("href", "#b");
});
