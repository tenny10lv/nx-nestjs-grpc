import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';

import { HeroService } from '../services/hero.service';
import { ClientGrpc } from '@nestjs/microservices';

@Controller('hero')
export class HeroController implements OnModuleInit {

    private heroService: HeroService;

    constructor(@Inject('HERO_PACKAGE') private readonly heroClient: ClientGrpc) { }
    
    onModuleInit() {
        this.heroService = this.heroClient.getService<HeroService>('HeroService');
      }
}
