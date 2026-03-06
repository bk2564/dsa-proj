const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const algorithmsRoot = path.join(projectRoot, "src", "algorithms", "array");
const publicRoot = path.join(projectRoot, "public");
const requiredFiles = ["ExecutionSection.js", "Question.js", "index.js", "meta.js", "steps.js"];
const excludedFolders = new Set(["plus-one"]);

function getAlgorithmDirs() {
  const categories = fs
    .readdirSync(algorithmsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(algorithmsRoot, entry.name));

  const dirs = [];
  for (const categoryDir of categories) {
    const entries = fs
      .readdirSync(categoryDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);

    for (const name of entries) {
      if (!excludedFolders.has(name)) {
        dirs.push(path.join(categoryDir, name));
      }
    }
  }

  return dirs;
}

function parseMeta(metaPath) {
  const content = fs.readFileSync(metaPath, "utf8");
  const idMatch = content.match(/\bid:\s*(\d+)/);
  const codePathMatch = content.match(/\bcodePath:\s*(?:\n\s*)?["'`]([^"'`]+)["'`]/m);

  return {
    id: idMatch ? Number(idMatch[1]) : null,
    codePath: codePathMatch ? codePathMatch[1] : null,
  };
}

function main() {
  const algorithmDirs = getAlgorithmDirs();
  const errors = [];
  const seenIds = new Map();

  for (const dir of algorithmDirs) {
    const baseName = path.basename(dir);
    for (const file of requiredFiles) {
      const filePath = path.join(dir, file);
      if (!fs.existsSync(filePath)) {
        errors.push(`Missing required file "${file}" in ${dir}`);
      }
    }

    const metaPath = path.join(dir, "meta.js");
    if (!fs.existsSync(metaPath)) {
      continue;
    }

    const { id, codePath } = parseMeta(metaPath);
    if (id == null) {
      errors.push(`Missing numeric id in ${metaPath}`);
    } else if (seenIds.has(id)) {
      errors.push(`Duplicate meta id ${id} in ${metaPath} and ${seenIds.get(id)}`);
    } else {
      seenIds.set(id, metaPath);
    }

    if (!codePath) {
      errors.push(`Missing codePath in ${metaPath}`);
    } else {
      const normalized = codePath.startsWith("/") ? codePath.slice(1) : codePath;
      const snippetPath = path.join(publicRoot, normalized);
      if (!fs.existsSync(snippetPath)) {
        errors.push(`codePath file not found for ${baseName}: ${snippetPath}`);
      }
    }
  }

  if (errors.length > 0) {
    console.error("Algorithm validation failed:");
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log(`Algorithm validation passed for ${algorithmDirs.length} folders.`);
}

main();
