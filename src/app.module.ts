import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://macsof:macsof@nextlevelcarwash.yjs3i.mongodb.net/owbc?retryWrites=true&w=majority',
    ),
    AdminModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
