import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(JwtStrategy.name);
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey:
        process.env.JWT_SECRET ||
        'eDL2ZVn5PRTeMzevWENAoG9nQjIeSD1HJsg82DKytt1iFDQVIYosLaGBNdiUW9hTVcITPPeDspnpNXX3ocD6sWMgXSLjIIAAuXeTM9F5wxU6Rj28gAmCzgkDVANO9WmhbWh3OwrxYzDhh7FPPPT1McBsRtU0YTDjaJlVsg1blXaDTROoIX7sAmkBjFDdFbTRiSCGphO5tfbSfdSuUzZyU/3rrykkhBY6rPaNAMM7bWuXlfK0/3k2uvhO3sBLfRAtf91pkynS2tUedrGnBLKtykliKi7LnGJJQBmfXvq6jVFuVe7uRMZ85DrBDPUG7t/QmVeBiuSGxh00q/bgkduiqw',
    });
  }

  validate(payload: any) {
    console.log('Here we are');
    this.logger.log(`Validating payload: ${JSON.stringify(payload)}`);
    return payload;
  }
}
