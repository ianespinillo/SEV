import { Module } from '@nestjs/common';
import {ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { SignalsModule } from './signals/signals.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [DbModule, CloudinaryModule, ConfigModule.forRoot(), SignalsModule, ReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
