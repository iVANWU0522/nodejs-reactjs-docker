import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

import { BaseEntity } from './base.entity';
import { Situation } from './situation.entity';

@Entity()
export class SituationStatistic extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ type: 'bigint' })
    sid: number;

    @ManyToOne(() => Situation, (situation) => situation.id)
    @JoinColumn({ name: 'sid' })
    situation: Situation;

    @Column({ type: 'varchar', length: 255 })
    job_id: string;

    @Column({ type: 'double' })
    headcount_year_1: number;

    @Column({ type: 'double' })
    headcount_year_2: number;

    @Column({ type: 'double' })
    headcount_year_3: number;

    @Column({ type: 'double' })
    headcount_year_4: number;
}