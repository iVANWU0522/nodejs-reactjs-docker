import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';

import { AppDataSource } from './app.data.source';

class DBConfig {
    readonly host: string;
    readonly port: number;
    readonly database: string;
    readonly username: string;
    readonly password: string;
    readonly synchronize: boolean;
    readonly logging: boolean;
}

export class AppService implements OnModuleInit, OnModuleDestroy {
    static port(): number {
        const { PORT } = process.env;
        return PORT && Number(PORT) ? Number(PORT) : 5000;
    }

    async onModuleInit(): Promise<void> {
        AppDataSource.initialize()
            .then(() => {
                console.log("Data Source has been initialized!");
            })
            .catch((error: Error) => this.failToConnectDatabase(error));
    }

    private failToConnectDatabase(error: Error): void {
        console.error(error);
        process.exit(1);
    }

    async onModuleDestroy(): Promise<void> {
        AppDataSource.destroy();
    }
}
