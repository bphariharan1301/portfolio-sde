import { ogContentType, ogSize, renderOgImage } from "@/lib/ogImage";

export const alt =
  "Hariharan B P — Software Engineer & Product Builder. I build products that solve real problems.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage();
}
