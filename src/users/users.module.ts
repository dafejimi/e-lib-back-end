import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtServiceModule } from 'src/jwt-service/jwt-service.module';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Module({
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy, JwtAuthGuard],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secretOrPrivateKey:
        process.env.JWT_SECRET ||
        'eDL2ZVn5PRTeMzevWENAoG9nQjIeSD1HJsg82DKytt1iFDQVIYosLaGBNdiUW9hTVcITPPeDspnpNXX3ocD6sWMgXSLjIIAAuXeTM9F5wxU6Rj28gAmCzgkDVANO9WmhbWh3OwrxYzDhh7FPPPT1McBsRtU0YTDjaJlVsg1blXaDTROoIX7sAmkBjFDdFbTRiSCGphO5tfbSfdSuUzZyU/3rrykkhBY6rPaNAMM7bWuXlfK0/3k2uvhO3sBLfRAtf91pkynS2tUedrGnBLKtykliKi7LnGJJQBmfXvq6jVFuVe7uRMZ85DrBDPUG7t/QmVeBiuSGxh00q/bgkduiqw',
      signOptions: { expiresIn: '2h' },
    }),
    PassportModule,
    JwtServiceModule,
  ],
})
export class UsersModule {}
