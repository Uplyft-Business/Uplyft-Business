import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { TallyPopupLink } from "@/components/TallyPopup";

describe("TallyPopupLink", () => {
  afterEach(() => {
    delete window.Tally;
  });

  it("opens the Tally popup when the embed script has loaded", () => {
    const openPopup = vi.fn();
    window.Tally = { openPopup };
    render(<TallyPopupLink formId="abc123">Start</TallyPopupLink>);

    const notPrevented = fireEvent.click(screen.getByRole("link", { name: "Start" }));

    expect(openPopup).toHaveBeenCalledWith("abc123", expect.objectContaining({ layout: "modal" }));
    expect(notPrevented).toBe(false);
  });

  it("falls back to the hosted form in a new tab without the embed script", () => {
    render(<TallyPopupLink formId="abc123">Start</TallyPopupLink>);
    const link = screen.getByRole("link", { name: "Start" });

    expect(link).toHaveAttribute("href", "https://tally.so/r/abc123");
    expect(link).toHaveAttribute("target", "_blank");
    expect(fireEvent.click(link)).toBe(true);
  });
});
