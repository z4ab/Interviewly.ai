// app/api/upload/route.js
import { NextResponse } from 'next/server';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  const form = formidable({
    multiples: true,
    uploadDir: path.join(process.cwd(), 'AudioFiles'),
    keepExtensions: true,
  });

  if (!fs.existsSync(form.uploadDir)) {
    fs.mkdirSync(form.uploadDir, { recursive: true });
  }

  const body = await req.blob();
  const buffer = await body.arrayBuffer();
  const stream = Readable.from(Buffer.from(buffer));

  return new Promise((resolve, reject) => {
    form.parse(stream, (err, fields, files) => {
      if (err) {
        reject(
          NextResponse.json({ error: 'Failed to upload file' }, { status: 500 })
        );
        return;
      }

      resolve(
        NextResponse.json({
          message: 'File uploaded successfully',
          filePath: files.file.filepath,
        })
      );
    });
  });
}
