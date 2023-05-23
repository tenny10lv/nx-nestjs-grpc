import { Injectable } from '@nestjs/common';
import { Hero, HeroById } from '@lib-proto';


@Injectable()
export class AppService {

    private readonly items: Hero[] = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Doe' },
    ];

    findOne(data: HeroById) {
        return this.items.find(({ id }) => id === data.id)
    }
}
