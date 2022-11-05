import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { BaseEntity } from './base.entity';
import { SituationStatistic } from './situation-statistic.entity';

@Entity()
export class Situation extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    description: string;

    @OneToMany(() => SituationStatistic, (situationStatistic) => situationStatistic.situation, {
        cascade: true,
        eager: true,
    })
    situationStatistics: SituationStatistic[];
}