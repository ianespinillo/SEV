import { Injectable, OnModuleInit } from '@nestjs/common';
import {PrismaClient } from '@repo/db/src'


@Injectable()
export class DbService extends PrismaClient implements OnModuleInit{

    constructor(private db: PrismaClient) {
        super();
    }
    async onModuleInit() {
        await this.$connect();
    }
}
