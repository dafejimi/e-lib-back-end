import { IsString, IsOptional, IsArray, IsMongoId } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly biography?: string;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  readonly booksId?: string[];
}
