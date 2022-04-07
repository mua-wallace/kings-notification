import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './modules/emails/email.module';
import { PushNotificationModule } from './modules/push-notification/push-notification.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [EmailModule, PushNotificationModule,RedisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
