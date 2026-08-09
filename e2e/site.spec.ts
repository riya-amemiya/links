import { expect, test } from "@playwright/test";

test.describe("boot", () => {
  test("shows portfolio boot screen", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Amemiya Riya")).toBeVisible();
    await expect(page.getByText("— PORTFOLIO SYSTEM —")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "INSERT COIN" }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Press to start" }),
    ).toBeVisible();
  });

  test("navigates to home on start", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Press to start" }).click();
    await expect(page).toHaveURL(/\/home$/);
    await expect(page.getByText("Character Select")).toBeVisible();
  });
});

test.describe("home", () => {
  test("renders profile, skills, and links", async ({ page }) => {
    await page.goto("/home");
    await expect(page.getByRole("heading", { name: /Amemiya/ })).toBeVisible();
    await expect(page.getByText("Platform Engineer").first()).toBeVisible();
    await expect(page.getByText("TypeScript")).toBeVisible();
    await expect(page.getByText("React")).toBeVisible();
    await expect(page.getByRole("link", { name: /GitHub/ })).toBeVisible();
    await expect(page.getByRole("link", { name: /Twitter/ })).toBeVisible();
    await expect(page.getByRole("link", { name: /Zenn/ })).toBeVisible();
    await expect(page.getByRole("img", { name: "Amemiya Riya" })).toBeVisible();
  });

  test("links to works stage select", async ({ page }) => {
    await page.goto("/home");
    await page.getByRole("link", { name: /Stage Select/ }).click();
    await expect(page).toHaveURL(/\/works$/);
    await expect(
      page.getByRole("heading", { name: "Stage Select" }),
    ).toBeVisible();
  });
});

test.describe("works", () => {
  test("lists stages from static content", async ({ page }) => {
    await page.goto("/works");
    await expect(
      page.getByRole("heading", { name: "Stage Select" }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: /Slide/ })).toBeVisible();
    await expect(page.getByRole("link", { name: /agrb/ })).toBeVisible();
    await expect(page.getByRole("link", { name: /UMT/ })).toBeVisible();
    await expect(page.getByRole("link", { name: /links/ })).toBeVisible();
    await expect(page.getByRole("link", { name: /Articles/ })).toBeVisible();
  });

  test("opens stage briefing and supports prev/next", async ({ page }) => {
    await page.goto("/works");
    await page.getByRole("link", { name: /Slide/ }).click();
    await expect(page).toHaveURL(/\/works\/slide$/);
    await expect(page.getByText("Stage Briefing")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Slide" })).toBeVisible();
    await expect(page.getByText("Loadout")).toBeVisible();
    await expect(page.getByRole("link", { name: /Enter Stage/ })).toBeVisible();

    await page.getByRole("link", { name: /Next/ }).click();
    await expect(page).toHaveURL(/\/works\//);
    await expect(page.getByText("Stage Briefing")).toBeVisible();

    await page.getByRole("link", { name: /Prev/ }).click();
    await expect(page.getByText("Stage Briefing")).toBeVisible();
  });

  test("returns to stage list from briefing", async ({ page }) => {
    await page.goto("/works/slide");
    await page.getByRole("link", { name: /Stages/ }).click();
    await expect(page).toHaveURL(/\/works$/);
    await expect(
      page.getByRole("heading", { name: "Stage Select" }),
    ).toBeVisible();
  });
});
