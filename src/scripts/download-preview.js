import fs from "fs/promises";

async function downloadImages() {
  await fs.mkdir("src/assets/previews", { recursive: true });

  const images = [
    {
      url: "https://marcoslopezm.github.io/SS/full.webp",
      path: "src/assets/previews/full-notes.webp",
    },
    {
      url: "https://marcoslopezm.github.io/Tesis-Licenciatura/full.webp",
      path: "src/assets/previews/full-thesis.webp",
    },
  ];

  for (const img of images) {
    const response = await fetch(img.url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${img.url}: ${response.status} ${response.statusText}`,
      );
    }
    const buffer = await response.arrayBuffer();
    await fs.writeFile(img.path, Buffer.from(buffer));
  }
}

await downloadImages();
