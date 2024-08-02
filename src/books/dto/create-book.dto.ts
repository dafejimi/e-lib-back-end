import {
  IsString,
  IsOptional,
  IsArray,
  IsNumber,
  IsMongoId,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  readonly title: string;

  @IsMongoId()
  readonly authorId: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  readonly reviews?: string[];

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  readonly ratings?: number[];
}
