import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { SignalsService } from '../services/signals.service';
import { CreateSignalDTO } from '../dto/create-signal.dto';
import { Signals } from '@repo/db/src';

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
    }
    @Get(':id')
    async getById(@Param('id', ParseIntPipe) id: number): Promise<Signals> {
        return this.service.getById(id);
    }
}
