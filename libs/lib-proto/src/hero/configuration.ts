import { join } from "path";

export * from './hero';``
export const heroConfiguration = {
    packageName: 'hero',
    protoPath: join(__dirname, 'assets/hero.proto')
}
