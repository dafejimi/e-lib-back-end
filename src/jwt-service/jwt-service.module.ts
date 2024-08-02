import { Module } from '@nestjs/common';
import { JwtServiceService } from './jwt-service.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [JwtServiceService],
  imports: [
    JwtModule.register({
      secretOrPrivateKey:
        process.env.JWT_SECRET ||
        'eDL2ZVn5PRTeMzevWENAoG9nQjIeSD1HJsg82DKytt1iFDQVIYosLaGBNdiUW9hTVcITPPeDspnpNXX3ocD6sWMgXSLjIIAAuXeTM9F5wxU6Rj28gAmCzgkDVANO9WmhbWh3OwrxYzDhh7FPPPT1McBsRtU0YTDjaJlVsg1blXaDTROoIX7sAmkBjFDdFbTRiSCGphO5tfbSfdSuUzZyU/3rrykkhBY6rPaNAMM7bWuXlfK0/3k2uvhO3sBLfRAtf91pkynS2tUedrGnBLKtykliKi7LnGJJQBmfXvq6jVFuVe7uRMZ85DrBDPUG7t/QmVeBiuSGxh00q/bgkduiqw',
      signOptions: { expiresIn: '2h' },
    }),
    PassportModule,
  ],
  exports: [JwtServiceService],
})
export class JwtServiceModule {}
