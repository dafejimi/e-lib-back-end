import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Book, BookSchema } from './schemas/book.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from '../strategy/jwt.strategy';
import { UsersModule } from 'src/users/users.module';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { JwtServiceModule } from 'src/jwt-service/jwt-service.module';

@Module({
  controllers: [BooksController],
  providers: [BooksService, JwtStrategy, JwtAuthGuard],
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
    UsersModule,
    JwtServiceModule,
  ],
})
export class BooksModule {}
