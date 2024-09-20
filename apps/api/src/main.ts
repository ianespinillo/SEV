import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	// Configura el prefijo global para las rutas
	app.setGlobalPrefix('api');

	// Habilita los pipes globales para validación
	app.useGlobalPipes(new ValidationPipe());

	// Configura CORS
	app.enableCors({
		origin: 'http://localhost:3001', // Permite solicitudes desde este origen específico
		methods: 'GET', // Métodos permitidos
		allowedHeaders: 'Content-Type, Authorization', // Encabezados permitidos
	});

	await app.listen(3000);
}

bootstrap();
