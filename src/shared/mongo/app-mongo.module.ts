import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      `mongodb://` +
        `${process.env.MONGODB_USERNAME || ''}` +
        `${process.env.MONGODB_PASSWORD ? `:${process.env.MONGODB_PASSWORD}@` : ''}` +
        `${process.env.MONGODB_HOST}` +
        `:${process.env.MONGODB_PORT}` +
        `/${process.env.MONGODB_DATABASE}`,
    ),
    // MongooseModule.forRoot(process.env.MONGODB_URI),
    // MongooseModule.forFeature([
    //   { name: EventLog.name, schema: EventLogSchema },
    // ]),
  ],
  providers: [],
  exports: [],
})
export class AppMongoModule {}
