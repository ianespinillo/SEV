import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateReviewDTO } from './dto/create-review.dto';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
    constructor(private service: ReviewsService) {}
    @Post()
    async create(
        @Body() body: CreateReviewDTO
    ){
        return this.service.create(body);
    }
    @Get()
    async getAll(){
        return this.service.getAll();
    }

    @Get(':q')
    async getByQuantity(@Param('q', ParseIntPipe) q: number){
        return this.service.getByQuantity(q);
    }
}
