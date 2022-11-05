import {
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class BaseEntity {
    @CreateDateColumn()
    created_at: Date = new Date();

    @UpdateDateColumn()
    updated_at: Date = new Date();

    @DeleteDateColumn()
    deleted_at: Date | null = null;
}