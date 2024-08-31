import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateReviewDTO {
	@IsString()
	@MinLength(1)
	name: string;

	@IsString()
	@MinLength(1)
	message: string;

	@IsString()
	@MinLength(1)
	@IsEmail()
	email: string;
}
