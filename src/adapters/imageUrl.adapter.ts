import { Blob, File } from "node:buffer";
import { ApiErrorResponse } from "../types/api.js";
import { CustomCardsError } from "../utils/error.js";

export async function imageUrlAdapter(url: string): Promise<File> {
  if (!url) throw new CustomCardsError("'url' param is required");
  if (typeof url !== "string")
    throw new CustomCardsError(
      "Invalid image type (must be provide a url string)"
    );
  if (url.startsWith("http://"))
    throw new CustomCardsError("Insecure image url (use HTTPS)");
  if (!url.startsWith("https://"))
    throw new CustomCardsError("Invalid url structure");

  try {
    const res = await fetch(url);

    if (!res.ok) {
      const error: ApiErrorResponse = await res.json();
      const msg = Array.isArray(error.message)
        ? error.message[0]
        : error.message;

      throw new CustomCardsError(msg);
    }

    const type = res.headers.get("Content-Type");

    if (!type) throw new CustomCardsError("Unknown image mimetype");

    const arrayBuffer = await res.arrayBuffer();
    const blob = new Blob([arrayBuffer]);
    const file = new File([blob], "image", {
      type,
    });
    return file;
  } catch (e) {
    if (e instanceof CustomCardsError) throw e;

    throw new CustomCardsError(e);
  }
}
