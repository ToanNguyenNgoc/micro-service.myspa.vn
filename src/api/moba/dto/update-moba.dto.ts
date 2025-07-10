import { PartialType } from '@nestjs/mapped-types';
import { CreateMobaDto } from './create-moba.dto';

export class UpdateMobaDto extends PartialType(CreateMobaDto) {}
