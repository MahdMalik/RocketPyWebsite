import Busboy from "busboy";
import { writeFile } from "fs/promises";
import path from "path";
import os from "os";
import fs from "fs";

export async function POST(req) {
  return new Promise((resolve, reject) => {
    const busboy = Busboy({ headers: req.headers });

    let filePath = null;

    busboy.on("file", (fieldname, file, filename) => {
      const tempPath = path.join(os.tmpdir(), filename);
      filePath = tempPath;

      file.pipe(fs.createWriteStream(tempPath));
    });

    busboy.on("finish", () => {
      resolve(
        new Response(
          JSON.stringify({ success: true, path: filePath }),
          { status: 200 }
        )
      );
    });

    busboy.on("error", (err) => {
      reject(new Response(JSON.stringify({success: false}), { status: 500 }));
    });

    req.body
      .getReader()
      .read()
      .then(({ value }) => {
        busboy.end(value);
      });
  });
}