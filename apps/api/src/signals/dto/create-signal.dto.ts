import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSignalDTO {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNotEmpty()
    image: File;

    @IsNumber()
    category_id: number;
}