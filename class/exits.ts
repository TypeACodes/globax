import { statSync } from "fs";

function searchFileExists(path: string): boolean {
  try {
    const stat = statSync(path);
    return stat.isFile();
  } catch (error) {
    return false;
  }
}

export default searchFileExists;
