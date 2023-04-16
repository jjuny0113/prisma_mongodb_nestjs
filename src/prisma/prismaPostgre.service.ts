import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '../../prisma/generated/client2/index';
// prisma generate --schema prisma/schema1.prisma
@Injectable()
export class PrismaPostgresService extends PrismaClient {
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
