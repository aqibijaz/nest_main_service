import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  /* 
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.enableCors({
    origin: "http://localhost:4200"
  })
  await app.listen(3000);
  */
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://enldvyis:AdkW0LQMTZJkYAe0iEPt1b6vj8mLhhTE@jaguar.rmq.cloudamqp.com/enldvyis'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },

  })

  app.listen(() => console.log('Microservice is Listening'))

}
bootstrap();
