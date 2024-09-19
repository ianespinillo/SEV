import {
	Body,
	Controller,
	Get,
	Param,
	ParseIntPipe,
	Post,
} from '@nestjs/common';
import type { Signals } from '@repo/db/src';
import type { CreateSignalDTO } from '../dto/create-signal.dto';
import { SignalsService } from '../services/signals.service';

@Controller('signals')
export class SignalsController {
	constructor(private service: SignalsService) {}
	@Post('')
	async create(@Body() body: CreateSignalDTO) {
		return this.service.create(body);
	}

	@Get('')
	async getAll(): Promise<Signals[]> {
		return this.service.getAll();
	}s
	@Get(':id')
	async getById(@Param('id', ParseIntPipe) id: number): Promise<Signals> {
		return this.service.getById(id);
	}
	@Get('/cat/:categoryId')
	async getByCategory(@Param('categoryId', ParseIntPipe) categoryId: number): Promise<Signals[]> {
		return await this.service.filterByCategoryId(categoryId)
	}
}
