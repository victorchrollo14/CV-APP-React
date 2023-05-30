import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Header } from "../src/Home/Header";
import { Temp } from "../src/Template/temp";
import { SkillsSection } from "../src/Home/SkillsSection";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<Header />);
    expect(screen.getByRole("heading", { name: "CV Builder" }));
  });
});

describe("App component", () => {
  it("renders magnificant monkeys", () => {
    expect(<Temp />).toMatchSnapshot();
  });

  it("radical rhinos after button click", async () => {
    const user = userEvent.setup();
    render(<Temp />);
    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});

describe("App component", () => {
    it("Renders correct input", () => {
        render(<SkillsSection />)
        let input = screen.getByPlaceholderText("Enter a new Skill");
        expect(input.textContent).toMatch("");
    })
})
