import { Injectable } from '@nestjs/common';
import type { Category } from '@repo/db';
import { DbService } from 'src/db/db.service';

@Injectable()
export class CategoryService {
	constructor(private db: DbService) {}

	async getAll(): Promise<Category[]> {
		return await this.db.category.findMany();
	}

	async getById(id: number): Promise<Category> {
		return await this.db.category.findUnique({
			where: {
				id,
			},
		});
	}

	async create(name: string): Promise<Category> {
		return await this.db.category.create({
			data: {
				name,
			},
		});
	}
}
