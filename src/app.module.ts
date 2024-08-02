import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from './strategy/jwt.strategy';
import { JwtAuthGuard } from './guards/jwt.guard';
import { JwtServiceModule } from './jwt-service/jwt-service.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    BooksModule,
    AuthorsModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://jimijayoj:9988HqMdpQTGL0pf@cluster0.oculnsn.mongodb.net/e-library?retryWrites=true&w=majority&appName=Cluster0',
    ),
    JwtServiceModule,
    SeedModule,
  ],
  providers: [JwtStrategy, JwtAuthGuard],
  exports: [JwtStrategy, JwtAuthGuard],
})
export class AppModule {}
