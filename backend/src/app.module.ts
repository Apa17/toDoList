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
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'user',
      database: 'todolistdb',
      autoLoadEntities: true,
    }),
    ExtraModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}