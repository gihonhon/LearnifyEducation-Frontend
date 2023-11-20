import { generateComponents } from "@uploadthing/react";

//TODO: Add Api Route Core for Uploadthing
import type { OurFileRouter } from "@/app/api/uploadthing/core";

export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();
