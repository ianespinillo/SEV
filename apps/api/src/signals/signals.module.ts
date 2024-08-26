import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { SignalsController } from './controllers/signals.controller';
import { SignalsService } from './services/signals.service';
import { CategoryService } from './services/category.service';

@Module({
  controllers: [SignalsController],
  providers: [SignalsService, CategoryService],
  imports: [DbModule, CloudinaryModule],
})
export class SignalsModule {}
