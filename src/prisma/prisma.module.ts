import { Module, forwardRef } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaPostgresService } from './prismaPostgre.service';

@Module({
  providers: [PrismaService, PrismaPostgresService],
  exports: [PrismaService, PrismaPostgresService],
})
export class PrismaModule {}
