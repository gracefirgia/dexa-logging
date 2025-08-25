import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const configService = appContext.get(ConfigService);

  const rabbitmqUrl = configService.get<string>('RABBITMQ_URI') || 'amqp://guest:guest@localhost:5672';
  const queue = configService.get<string>('RABBITMQ_QUEUE') || 'core-iam-events';

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [rabbitmqUrl],
      queue,
      queueOptions: {
        durable: true,
      },
    },
  });

  await app.listen();
  Logger.log(`🚀 Logging service is listening on queue "${queue}" via ${rabbitmqUrl}`);
}

bootstrap();
