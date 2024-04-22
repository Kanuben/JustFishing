import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Catch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  baitType: string;

  @Column({ type: 'date' })
  date: Date;

  @Column({type: 'decimal'})
  length?: number;

  @Column({ type: 'varchar' })
  location: string;
  
  @Column({ type: 'varchar' })
  lure: string;

  @Column({ type: 'varchar' })
  lureColor: string;

  @Column({ type: 'varchar'})
  species: string;

  @Column({ type: 'integer' })
  userId: number;

  @Column({ type: 'decimal' })
  weight: number;

  @Column({ type: 'integer' })
  points: number;

}
