import { Module, } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { DbModule } from './db/db.module';
import { ReviewsModule } from './reviews/reviews.module';
import { SignalsModule } from './signals/signals.module';


@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		DbModule,
		CloudinaryModule,
		SignalsModule,
		ReviewsModule,
		
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
