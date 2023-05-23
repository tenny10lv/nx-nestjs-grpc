import { Injectable } from '@nestjs/common';
import { Zombie } from './interfaces/zombie.interface';
import { ZombieById } from './interfaces/zombie-by-id.interface';

@Injectable()
export class AppService {

    private readonly items: Zombie[] = [
        { id: 1, name: 'Crawly' },
        { id: 2, name: 'Brainy' },
    ];

    findOne(data: ZombieById) {
        return this.items.find(({ id }) => id === data.id)
    }
}
