import { stat } from 'fs';
import { statusEnum } from 'src/models/data.model';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class feedBack {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    type: 'enum',
    enum: statusEnum,
    default: statusEnum.Suggestion,
  })
  statu: string;

  @Column({ default: 0 })
  upvotes: number;

  @Column('text', { default: '' })
  description: string;

  @Column({ default: 0 })
  comments: number;
}
