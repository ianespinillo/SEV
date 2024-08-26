import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as Cloudinary } from 'cloudinary';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { cwd } from 'process';

@Injectable()
export class CloudinaryService {
    private api_key: string;
    private api_secret: string;
    private cloud_name: string;
    constructor(private configService: ConfigService) {
        this.api_key = this.configService.get('CLOUDINARY_API_KEY');
        this.api_secret = this.configService.get('CLOUDINARY_API_SECRET');
        this.cloud_name = this.configService.get('CLOUDINARY_CLOUD_NAME');
        Cloudinary.config({
            cloud_name: this.cloud_name,
            api_key: this.api_key,
            api_secret: this.api_secret
        });
    }
    async uploadImage(image:File):Promise<string> {
        try {
			const buffer = Buffer.from(await image.arrayBuffer());
			const tempDir = join(cwd(), '/temp');
			const filePath = join(tempDir, image.name);
			await writeFile(filePath, buffer);

			const response = await Cloudinary.uploader.upload(filePath, {
				public_id: image.name,
				folder: 'SEV/img/',
			});

			return response.secure_url;
		} catch (error) {
			throw new InternalServerErrorException('Error uploading file');
		}
    }
}
