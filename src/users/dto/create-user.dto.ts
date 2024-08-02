import { IsString, IsOptional, IsArray, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  readonly email?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  readonly readingHistory?: string[];
}
