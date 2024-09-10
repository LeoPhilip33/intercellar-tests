import { test, expect } from "@playwright/test";
import { DELETE, NO_NOTES_YET, NOT_CONNECTED } from "./const/global.const";
import {
  addFavoriteNote,
  addNote,
  deleteFavoriteNote,
} from "./utils/notes.utils";

test("Can go to the home page", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page.getByText(NOT_CONNECTED)).toBeVisible();
});

test("Add a note", async ({ page }) => {
  await addNote(page);
});

test("Delete a note", async ({ page }) => {
  await addNote(page);
  await page.locator("._userNotesContainer_1pfta_22").getByText(DELETE).click();
  await expect(page.getByText(NO_NOTES_YET)).toBeVisible();
});

test("Add a note to favorites", async ({ page }) => {
  await addNote(page);
  await addFavoriteNote(page);
});

test("Delete a note to favorites", async ({ page }) => {
  await addNote(page);
  await addFavoriteNote(page);
  await deleteFavoriteNote(page);
});
