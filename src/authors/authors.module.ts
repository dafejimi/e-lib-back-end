import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, AuthorSchema } from './schemas/author.schema';
import { JwtStrategy } from '../strategy/jwt.strategy';
import { UsersModule } from 'src/users/users.module';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { JwtServiceModule } from 'src/jwt-service/jwt-service.module';

@Module({
  controllers: [AuthorsController],
  providers: [AuthorsService, JwtStrategy, JwtAuthGuard],
  imports: [
    MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }]),
    UsersModule,
    JwtServiceModule,
  ],
})
export class AuthorsModule {}
