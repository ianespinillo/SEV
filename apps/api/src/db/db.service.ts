import { Injectable, type OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@repo/db';

@Injectable()
export class DbService extends PrismaClient implements OnModuleInit {
	constructor() {
		super();
	}
	async onModuleInit() {
		await this.$connect();
	}
}
