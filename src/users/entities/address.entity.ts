import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Address {
  @Column()
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public street: string;

  @Column()"str"
  public city: string;

  @Column()
  public country: string;
}
export default Address;
