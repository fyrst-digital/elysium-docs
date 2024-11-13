import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { thumbnailSizes } from './theme.config.mts';

const inputDir = './content/public/images/source/';
const outputDir = './content/public/images/thumbnails/';

const createThumbnails = async (filePath: string) => {
    const fileName = path.basename(filePath, path.extname(filePath));
    const outputFilePath = (size: number) => path.join(outputDir, `${fileName}-${size}.webp`);

    for (const size of thumbnailSizes) {
        await sharp(filePath)
            .resize(size)
            .toFormat('webp')
            .toFile(outputFilePath(size));
    }
};

const processDirectory = async (dir: string) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else if (entry.isFile() && /\.(jpe?g|png)$/i.test(entry.name)) {
            await createThumbnails(fullPath);
        }
    }
};

const ensureOutputDirExists = () => {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
};

const main = async () => {
    ensureOutputDirExists();
    await processDirectory(inputDir);
};

main().catch(console.error);