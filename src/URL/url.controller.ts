import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { UrlService } from './url.service';
import { Url } from './interface/url.interface';
import { UrlDTO } from './dto/url.dto';
import { Response } from 'express';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Get()
  async findAll(): Promise<Url[]> {
    return await this.urlService.findAll();
  }

  @Post()
  @Header('Content-type', 'application/json')
  async createShortUrl(@Body() body: UrlDTO): Promise<Url> {
    return await this.urlService.create(body);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Url> {
    return await this.urlService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UrlDTO): Promise<Url> {
    return await this.urlService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Url> {
    return await this.urlService.delete(id);
  }

  @Get('/v1/:hashCode')
  async getShortUrl(@Param('hashCode') hashCode): Promise<Url> {
    const result = await this.urlService.getShortUrl(hashCode);
    return result;
  }
}
