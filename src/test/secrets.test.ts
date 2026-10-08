import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

describe("No Secrets Security Audit", () => {
  it("scans src/ and public/ for prohibited secret keywords", () => {
    const srcDir = path.resolve(__dirname, "../");
    const publicDir = path.resolve(__dirname, "../../public");

    const allFiles = [...getAllFiles(srcDir), ...getAllFiles(publicDir)];
    const secretPatterns = [
      /AIza[0-9A-Za-z-_]{35}/, // Firebase API key pattern
      /DATABASE_SECRET/,
      /AWS_SECRET_ACCESS_KEY/,
      /PRIVATE_KEY.*=/,
      /password\s*:\s*["'][^"']+["']/i
    ];

    allFiles.forEach((filePath) => {
      // Skip binary pdf file and this audit file itself (it legitimately contains the keyword list)
      if (filePath.endsWith(".pdf")) return;
      if (path.resolve(filePath) === path.resolve(__filename)) return;

      const content = fs.readFileSync(filePath, "utf-8");
      secretPatterns.forEach((pattern) => {
        const match = content.match(pattern);
        expect(match, `Secret pattern match found in ${filePath}`).toBeNull();
      });
    });
  });
});
