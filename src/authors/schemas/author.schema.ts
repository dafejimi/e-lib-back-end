import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Book } from 'src/books/schemas/book.schema';

export type AuthorDocument = HydratedDocument<Author>;

@Schema({
  timestamps: true,
})
export class Author {
  @Prop({ required: true })
  name: string;

  @Prop()
  biography?: string;

  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: 'Book', default: [] })
  books?: Book[];
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
