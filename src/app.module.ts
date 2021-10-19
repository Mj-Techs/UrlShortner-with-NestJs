import { Module } from '@nestjs/common';
import { UrlModule } from './url/url.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UrlModule,
    MongooseModule.forRoot('mongodb://localhost:27017/UrlShortner'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
