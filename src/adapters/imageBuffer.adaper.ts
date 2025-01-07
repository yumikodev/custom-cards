import { Blob, File } from "node:buffer";
import { CustomCardsError } from "../utils/error.js";
import { fileTypeFromBuffer } from "file-type";

export async function imageBufferAdapter(buffer: Buffer): Promise<File> {
  if (!buffer) throw new CustomCardsError("'buffer' param is required");
  if (!(buffer instanceof Buffer))
    throw new CustomCardsError("Invalid image type (must be provide a Buffer)");

  try {
    const result = await fileTypeFromBuffer(buffer);

    if (!result) throw new CustomCardsError("Unknown file type");

    const blob = new Blob([buffer]);
    const file = new File([blob], "image", {
      type: result.mime,
    });
    return file;
  } catch (e) {
    throw new CustomCardsError(e);
  }
}
