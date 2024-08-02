import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Author } from '../../authors/schemas/author.schema';

export type BookDocument = HydratedDocument<Book>;

@Schema({
  timestamps: true,
})
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Author', required: true })
  author: Author;

  @Prop()
  description?: string;

  @Prop({ type: [String], default: [] })
  reviews?: string[];

  @Prop({ type: [Number], default: [] })
  ratings?: number[];
}

export const BookSchema = SchemaFactory.createForClass(Book);
