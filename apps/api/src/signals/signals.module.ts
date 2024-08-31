import { Module } from '@nestjs/common';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { DbModule } from 'src/db/db.module';
import { SignalsController } from './controllers/signals.controller';
import { CategoryService } from './services/category.service';
import { SignalsService } from './services/signals.service';

@Module({
	controllers: [SignalsController],
	providers: [SignalsService, CategoryService],
	imports: [DbModule, CloudinaryModule],
})
export class SignalsModule {}
