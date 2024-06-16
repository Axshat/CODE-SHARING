import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Skill, SkillSchema } from './skill.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ranjeet:ranjeet@cluster1.lggvuol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1',
    ),
    MongooseModule.forFeature([{ name: Skill.name, schema: SkillSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
