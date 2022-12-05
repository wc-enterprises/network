import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class Users {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

@Entity({ name: 'contacts' })
export class Contacts {
  @PrimaryColumn()
  id: string;

  @Column({ name: 'full_name' })
  fullName: string;

  @Column({ nullable: true }) facebook?: string;

  @Column({ nullable: true }) instagram?: string;

  @Column({ nullable: true }) linkedin?: string;

  @Column({ nullable: true }) description?: string;

  @Column({ nullable: true }) contactno?: string;

  @Column({ nullable: true }) place?: string;

  @Column({ nullable: true }) photo?: string;

  @Column('text', { array: true })
  tags: string[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

@Entity({ name: 'tags' })
export class Tags {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

@Entity({ name: 'relations' })
export class Relations {
  @PrimaryColumn()
  id1: string;

  @PrimaryColumn()
  id2: string;

  @Column()
  relation: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
