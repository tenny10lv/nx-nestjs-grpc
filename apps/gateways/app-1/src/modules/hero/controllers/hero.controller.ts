import { Controller, Get, Inject, OnModuleInit, Param, ParseIntPipe } from '@nestjs/common';

import { ClientGrpc } from '@nestjs/microservices';
import { HeroService } from '@lib-proto';

@Controller('hero')
export class HeroController implements OnModuleInit {

    private heroService: HeroService;

    constructor(@Inject('HERO_PACKAGE') private readonly heroClient: ClientGrpc) { }

    onModuleInit() {
        this.heroService = this.heroClient.getService<HeroService>('HeroService');
    }

    @Get(':id')
    async getOneHero(@Param('id', ParseIntPipe) id: number) {
        return this.heroService.FindOne({
            id: id
        });
    }
}
