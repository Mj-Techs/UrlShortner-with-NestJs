import * as mongoose from 'mongoose';
import * as shorthash from 'shorthash';

export const UrlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  hashedUrl: String,
  shortUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UrlSchema.pre('save', function (next) {
  const hash = shorthash.unique(this.originalUrl);
  this.hashedUrl = hash;
  this.shortUrl = `https://localhost:3000/url/v1/${hash}`;
  next();
});
