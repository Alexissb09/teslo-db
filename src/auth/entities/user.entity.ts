import { Product } from 'src/products/entities';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  email: string;

  @Column('text', {
    select: false,
  })
  password: string;

  @Column('text')
  fullName: string;

  @Column('boolean', {
    default: true,
  })
  isActive: boolean;

  @Column('text', {
    array: true,
    default: ['USER'],
  })
  roles: string[];

  @OneToMany(
    () => Product,
    (product) => {
      product.user;
    },
  )
  product: Product;

  @BeforeInsert()
  checkFieldBeforeInsert() {
    this.email.toLowerCase().trim();
  }

  @BeforeUpdate()
  checkFieldBeforeUpdate() {
    this.checkFieldBeforeInsert();
  }
}
