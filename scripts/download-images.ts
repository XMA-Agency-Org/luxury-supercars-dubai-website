import { writeFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import { join } from "path"
import manifest from "./image-manifest.json"

const PUBLIC_DIR = join(import.meta.dirname, "..", "public", "images")

async function downloadImage(url: string, destPath: string): Promise<void> {
  if (existsSync(destPath)) {
    console.log(`  [SKIP] ${destPath}`)
    return
  }

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    })

    if (!response.ok) {
      console.error(`  [FAIL] ${url} -> ${response.status}`)
      return
    }

    const buffer = Buffer.from(await response.arrayBuffer())
    await writeFile(destPath, buffer)
    console.log(`  [OK]   ${destPath}`)
  } catch (error) {
    console.error(`  [ERR]  ${url} -> ${(error as Error).message}`)
  }
}

function getExtension(url: string): string {
  const pathname = new URL(url).pathname
  const ext = pathname.split(".").pop()?.toLowerCase() ?? "jpg"
  return ext.includes("webp")
    ? "webp"
    : ext.includes("svg")
      ? "svg"
      : ext.includes("png")
        ? "png"
        : ext.includes("jpeg")
          ? "jpeg"
          : "jpg"
}

async function main() {
  console.log("Downloading images from luxurysupercarsdubai.com...\n")

  for (const [category, images] of Object.entries(manifest)) {
    const categoryDir = join(PUBLIC_DIR, category)
    await mkdir(categoryDir, { recursive: true })
    console.log(`[${category}]`)

    for (const [name, url] of Object.entries(
      images as Record<string, string>
    )) {
      const ext = getExtension(url)
      const dest = join(categoryDir, `${name}.${ext}`)
      await downloadImage(url, dest)
    }

    console.log()
  }

  console.log("Done!")
}

main()
