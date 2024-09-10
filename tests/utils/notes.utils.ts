import { expect, Page } from "@playwright/test";
import {
  HELLO_WORLD,
  ADD_NOTE,
  NO_NOTES_YET,
  FAVORITE,
  UN_FAVORITE,
} from "../const/global.const";

export async function addNote(page: Page) {
  await page.goto("http://localhost:5173/");

  await page.locator('input[placeholder="Enter your note"]').fill(HELLO_WORLD);

  await page.getByText(ADD_NOTE).click();

  await expect(page.getByText(NO_NOTES_YET)).not.toBeVisible();

  await expect(
    page.locator("._userNotesContainer_1pfta_22").getByText(HELLO_WORLD)
  ).toBeVisible();
}

export async function addFavoriteNote(page: Page) {
  await page
    .locator("._userNotesContainer_1pfta_22")
    .getByText(FAVORITE)
    .click();

  await expect(page.getByText(UN_FAVORITE)).toBeVisible();
}

export async function deleteFavoriteNote(page: Page) {
  await expect(page.getByText(UN_FAVORITE)).toBeVisible();
  await page.getByText(UN_FAVORITE).click();
  await expect(page.getByText(FAVORITE)).toBeVisible();
}
