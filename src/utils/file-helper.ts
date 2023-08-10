import { readFileSync, readdirSync, statSync } from "fs";

function getFileByReaddirSync(currentDir: string) {
  return readdirSync(currentDir);
}

function getFileDataByReadFileSync(path: string) {
  return readFileSync(path, "utf-8");
}

function checkIsDirectory(path: string) {
  return statSync(path).isDirectory();
}

export default {
  getFileByReaddirSync,
  getFileDataByReadFileSync,
  checkIsDirectory,
};
