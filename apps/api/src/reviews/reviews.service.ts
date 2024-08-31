import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import type { CreateReviewDTO } from './dto/create-review.dto';

@Injectable()
export class ReviewsService {
	constructor(private db: DbService) {}

	async create(body: CreateReviewDTO) {
		return this.db.$transaction(async (tx) => {
			const review = tx.review.findFirst({
				where: {
					email: body.email,
				},
			});
			if (review) throw new Error('Email already used');
			return tx.review.create({
				data: {
					name: body.name,
					message: body.message,
					email: body.email,
				},
			});
		});
	}
	async getAll() {
		return await this.db.review.findMany();
	}

	async getByQuantity(q: number) {
		return await this.db.review.findMany({
			take: q,
		});
	}
}
