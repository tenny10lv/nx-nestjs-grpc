import { Module } from '@nestjs/common';
import { HeroController } from './controllers/hero.controller';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { heroConfiguration } from '@lib-proto'


@Module({
  imports: [ ],
  controllers: [HeroController],
  providers: [
    {
      provide: 'HERO_PACKAGE',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            url: heroConfiguration.url,
            package: heroConfiguration.packageName,
            protoPath: heroConfiguration.protoPath,
          },
        })
      },
      inject: [],
    }
  ],
})
export class HeroModule {}
