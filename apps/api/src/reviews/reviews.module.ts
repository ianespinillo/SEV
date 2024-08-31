import { Module } from '@nestjs/common';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';
import { DbModule } from 'src/db/db.module';

@Module({
	controllers: [ReviewsController],
	imports: [DbModule],
	providers: [ReviewsService],
})
export class ReviewsModule {}
