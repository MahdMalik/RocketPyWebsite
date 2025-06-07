import Busboy from "busboy";
import { writeFile } from "fs/promises";
import path from "path";
import os from "os";
import fs from "fs";

export async function POST(req) {
    return new Promise((resolve, reject) => {
        //apparently the headers are not in an object format, they need to converted that way first
        const headers = Object.fromEntries(req.headers)
        const busboy = Busboy({ headers: headers });

        let filePath = null;

        //when receiving the file, begin doing stuff

        busboy.on("file", (fieldname, file, info) => {
            //the third argument is going to be an object that just happens to hold the filename, we need to extract it this way 
            const filename = info.filename
            const tempPath = path.join(os.tmpdir(), filename);
            filePath = tempPath;

            file.pipe(fs.createWriteStream(tempPath));
        });

        busboy.on("finish", () => {
            resolve(new Response(JSON.stringify({ success: true, path: filePath})));
        });

        busboy.on("error", (err) => {
            reject(new Response(JSON.stringify({success: false})));
        });

        //actually does the reading
        req.body
        .getReader()
        .read()
        .then(({ value }) => {
            busboy.end(value);
        });
  });
}