import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Author } from './schemas/author.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthorsService {
  constructor(@InjectModel(Author.name) private authorModel: Model<Author>) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const author = new this.authorModel(createAuthorDto);
    return author.save();
  }

  async findAll(): Promise<Author[]> {
    return this.authorModel.find().populate('books').exec();
  }

  async findOne(id: string): Promise<Author> {
    const author = await this.authorModel.findById(id).populate('books').exec();
    if (!author) {
      throw new NotFoundException('Author not found');
    }
    return author;
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    const author = await this.authorModel
      .findByIdAndUpdate(id, updateAuthorDto, { new: true })
      .populate('books')
      .exec();
    if (!author) {
      throw new NotFoundException('Author not found');
    }
    return author;
  }

  async remove(id: string): Promise<void> {
    const result = await this.authorModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException('Author not found');
    }
  }
}
