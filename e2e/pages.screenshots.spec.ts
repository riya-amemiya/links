import { mkdir } from "node:fs/promises";
import path from "node:path";

import { test } from "@playwright/test";

const outputDir = path.join(process.cwd(), "e2e", "output");

test.beforeAll(async () => {
  await mkdir(outputDir, { recursive: true });
});

test.describe("page screenshots", () => {
  test("boot", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("heading", { name: "INSERT COIN" }).waitFor();
    await page.screenshot({
      path: path.join(outputDir, "boot.png"),
      fullPage: true,
    });
  });

  test("home", async ({ page }) => {
    await page.goto("/home");
    await page.getByRole("heading", { name: /Amemiya/ }).waitFor();
    await page.screenshot({
      path: path.join(outputDir, "home.png"),
      fullPage: true,
    });
  });

  test("works", async ({ page }) => {
    await page.goto("/works");
    await page.getByRole("heading", { name: "Stage Select" }).waitFor();
    await page.screenshot({
      path: path.join(outputDir, "works.png"),
      fullPage: true,
    });
  });

  test("talks", async ({ page }) => {
    await page.goto("/talks");
    await page.getByRole("heading", { name: "Score Attack" }).waitFor();
    await page.screenshot({
      path: path.join(outputDir, "talks.png"),
      fullPage: true,
    });
  });

  test("lab", async ({ page }) => {
    await page.goto("/lab");
    await page.getByRole("heading", { name: "Bonus Stage" }).waitFor();
    await page.screenshot({
      path: path.join(outputDir, "lab.png"),
      fullPage: true,
    });
  });
});
