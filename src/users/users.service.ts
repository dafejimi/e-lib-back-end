import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
//import { JwtService } from '@nestjs/jwt';
import { JwtServiceService as NestJwtService } from '../jwt-service/jwt-service.service';
import { createHash } from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    private jwtService: NestJwtService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async signup(createUserDto: CreateUserDto) {
    const { username, password, email } = createUserDto;
    const existingUser = await this.userModel.findOne({ username });
    if (existingUser) {
      throw new BadRequestException('Username already exists');
    }
    const hashedPassword = createHash('sha256').update(password).digest('hex');
    const user = new this.userModel({
      username,
      password: hashedPassword,
      email,
    });
    user.save();
    const payload = { username: user.username, sub: user._id };
    return this.jwtService.sign(payload);
  }

  async login(username: string, password: string) {
    const user = await this.userModel.findOne({ username });
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    const hashedPassword = createHash('sha256').update(password).digest('hex');
    if (hashedPassword !== user.password) {
      throw new BadRequestException('Invalid credentials');
    }

    const payload = { username: user.username, sub: user._id };
    // const token = this.jwtService.sign(payload);
    return this.jwtService.sign(payload);
  }

  async updateUser(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const user = await this.userModel.findByIdAndUpdate(userId, updateUserDto, {
      new: true,
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async deleteUser(userId: string): Promise<void> {
    const result = await this.userModel.findByIdAndDelete(userId);
    if (!result) {
      throw new NotFoundException('User not found');
    }
  }
}
