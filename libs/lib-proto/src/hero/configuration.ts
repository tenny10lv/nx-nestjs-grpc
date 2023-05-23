import { join } from "path";

export * from './hero';
export const heroConfiguration = {
    url: 'localhost:3001',
    packageName: 'hero',
    protoPath: join(__dirname, 'assets/hero.proto')
}
