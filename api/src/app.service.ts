import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Skill } from './skill.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel(Skill.name) private skillModel: Model<Skill>) {}
  getSkills() {
    return this.skillModel.find();
  }

  addSkill(data: SkillDto) {
    const skill = new this.skillModel(data);
    skill.save();

    return skill;
  }

  async deleteSkill(id: string) {
    const _id = new mongoose.Types.ObjectId(id);
    await this.skillModel.deleteOne({ _id }).exec();
    return `Deleted ${id}`;
  }
}

export interface SkillDto {
  name: string;
  desc?: string;
  certificate?: string;
}
