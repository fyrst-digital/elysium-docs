import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { thumbnailSizes } from './theme.config.mts';

const inputDir = './content/public/images/source/';
const outputDir = './content/public/images/thumbnails/';

const createThumbnails = async (filePath: string, relativePath: string) => {
    const fileName = path.basename(filePath, path.extname(filePath));
    const outputFilePath = (size: number) => path.join(outputDir, relativePath, `${fileName}_${size}.webp`);

    for (const size of thumbnailSizes) {
        await sharp(filePath)
            .resize(size)
            .toFormat('webp')
            .toFile(outputFilePath(size));
    }
    console.info(`Created thumbnails for ${relativePath}/${fileName}`);
};

const processDirectory = async (dir: string, relativePath: string = '') => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const newRelativePath = path.join(relativePath, entry.name);

        if (entry.isDirectory()) {
            const outputDirPath = path.join(outputDir, newRelativePath);
            if (!fs.existsSync(outputDirPath)) {
                fs.mkdirSync(outputDirPath, { recursive: true });
            }
            await processDirectory(fullPath, newRelativePath);
        } else if (entry.isFile() && /\.(jpe?g|png)$/i.test(entry.name)) {
            await createThumbnails(fullPath, relativePath);
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