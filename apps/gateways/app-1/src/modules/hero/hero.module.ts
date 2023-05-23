import { Module } from '@nestjs/common';
import { HeroController } from './controllers/hero.controller';
import { ClientsModule } from '@nestjs/microservices';
import { heroServiceConfigurations } from './configurations/service.configuration';


@Module({
  imports: [
    ClientsModule.register([
        {
          name: 'HERO_PACKAGE',
          ...heroServiceConfigurations,
        },
      ]),
  ],
  controllers: [HeroController],
  providers: [],
})
export class HeroModule {}
