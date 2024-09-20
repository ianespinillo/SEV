import { BadRequestException, Injectable } from '@nestjs/common';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { DbService } from 'src/db/db.service';
import { CategoryService } from './category.service';
import type { CreateSignalDTO } from '../dto/create-signal.dto';
import type { Signals } from '@repo/db';

@Injectable()
export class SignalsService {
	constructor(
		private db: DbService,
		private cloudService: CloudinaryService,
		private categoryService: CategoryService,
	) {}
	async create(signal: CreateSignalDTO) {
		const image = await this.cloudService.uploadImage(signal.image);
		return this.db.$transaction(async (tx) => {
			const { id } = await this.categoryService.getById(signal.category_id);
			if (!id) throw new BadRequestException('Category not found');
			return tx.signals.create({
				data: {
					name: signal.name,
					description: signal.description,
					image: image,
					category_id: id,
				},
			});
		});
	}

	async getAll(): Promise<Signals[]> {
		return await this.db.signals.findMany();
	}

	async getById(id: number): Promise<Signals> {
		return await this.db.signals.findUnique({
			where: {
				id: id,
			},
		});
	}

	async filterByCategoryId(id: number){
		return await this.db.signals.findMany({
			where:{
				category_id: id
			}
		})
	}
}
