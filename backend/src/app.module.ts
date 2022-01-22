import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExtraModule } from './extra.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      type: 'postgres',
      host: 'ec2-52-201-195-11.compute-1.amazonaws.com',
      port: 5432,
      username: 'bztkgtlijmibux',
      password: 'e3166e43112274abaac1efa0f1e37f53eb5110ef76db26cb48be9a64854f34bd',
      database: 'dfaksukf2crvqg',
      autoLoadEntities: true,
    }),
    ExtraModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
