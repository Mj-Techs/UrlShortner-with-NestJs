import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Url } from './interface/url.interface';
import { UrlDTO } from './dto/url.dto';
import { Response } from 'express';

@Injectable()
export class UrlService {
  constructor(@InjectModel('Url') private readonly urlModel: Model<Url>) {}

  async findAll(): Promise<Url[]> {
    return await this.urlModel.find();
  }

  async create(body: UrlDTO): Promise<Url> {
    const newShortUrl = new this.urlModel(body);
    return await newShortUrl.save();
  }

  async findOne(id: string): Promise<Url> {
    return await this.urlModel.findById({ _id: id });
  }

  async update(id: string, body: UrlDTO): Promise<Url> {
    return await this.urlModel.findByIdAndUpdate(id, body, { new: true });
  }

  async delete(id: string): Promise<Url> {
    return await this.urlModel.findByIdAndRemove(id);
  }

  async getShortUrl(hashCode: string): Promise<Url> {
    return await this.urlModel.findOne({ hashedUrl: hashCode });
  }
}
