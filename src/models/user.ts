import { double } from "aws-sdk/clients/lightsail";
import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table
export class User_list extends Model<User_list> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.BIGINT,
  })
  chart_number: bigint;

  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
  })
  first_name: string;

  @Column({
    type: DataType.CHAR,
  })
  middle_initial: string;

  @Column({
    type: DataType.STRING,
  })
  street_1: string;

  @Column({
    type: DataType.STRING,
  })
  street_2: string;

  @Column({
    type: DataType.STRING,
  })
  city: string;

  @Column({
    type: DataType.STRING,
  })
  state: string;

  @Column({
    type: DataType.STRING,
  })
  zip_code: string;

  @Column({
    type: DataType.STRING,
  })
  phone_1: string;

  @Column({
    type: DataType.STRING,
  })
  phone_2: string;

  @Column({
    type: DataType.STRING,
  })
  phone_3: string;

  @Column({
    type: DataType.DATE,
  })
  dob: Date;

  @Column({
    type: DataType.CHAR,
  })
  sex: string;

  @Column({
    type: DataType.STRING,
  })
  contact_name: string;

  @Column({
    type: DataType.STRING,
  })
  contact_phone1: string;

  @Column({
    type: DataType.STRING,
  })
  contact_phone2: string;

  @Column({
    type: DataType.CHAR,
  })
  marital_status: string;

  @Column({
    type: DataType.STRING,
  })
  primary_provider: string;

  @Column({
    type: DataType.STRING,
  })
  primary_insured_id: string;

  @Column({
    type: DataType.STRING,
  })
  primary_insured_name: string;

  @Column({
    type: DataType.STRING,
  })
  primary_insurance: string;

  @Column({
    type: DataType.STRING,
  })
  secondary_insured_id: string;

  @Column({
    type: DataType.STRING,
  })
  secondary_insured_name: string;

  @Column({
    type: DataType.STRING,
  })
  secondary_insurance: string;

  @Column({
    type: DataType.STRING,
  })
  employer: string;

  @Column({
    type: DataType.STRING,
  })
  employer_phone: string;

  @Column({
    type: DataType.STRING,
  })
  employer_street1: string;

  @Column({
    type: DataType.STRING,
  })
  employer_street2: string;

  @Column({
    type: DataType.STRING,
  })
  employer_city: string;

  @Column({
    type: DataType.STRING,
  })
  employer_state: string;

  @Column({
    type: DataType.STRING,
  })
  employer_zip: string;

  @Column({
    type: DataType.STRING,
  })
  group_no: string;

  @Column({
    type: DataType.STRING,
  })
  plan_name: string;

  @Column({
    type: DataType.CHAR,
  })
  insured_authorization: string;

  @Column({
    type: DataType.DOUBLE,
  })
  deductible: double;

  @Column({
    type: DataType.DOUBLE,
  })
  copay: double;

  @Column({
    type: DataType.CHAR,
  })
  signature_on_file: string;

  @Column({
    type: DataType.DATE,
  })
  sof_date: Date;

  @Column({
    type: DataType.CHAR,
  })
  employment_status: string;

  @Column({
    type: DataType.STRING,
  })
  work_extension: string;

  @Column({
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  updatedAt: Date;
}
