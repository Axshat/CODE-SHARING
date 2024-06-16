import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Skill>;

@Schema()
export class Skill {
  @Prop()
  name: string;

  @Prop()
  certificate: number;

  @Prop()
  desc: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
