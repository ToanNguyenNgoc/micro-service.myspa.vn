/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-require-imports */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { mongooseLeanVirtuals } from 'src/utils';

export type CategoryDocument = CategoryModel & Document;

@Schema({
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  collection: 'categories',
})
export class CategoryModel extends Document {
  @Prop()
  name: string;

  @Prop({ default: true })
  status: boolean;
}

export const CategorySchema = SchemaFactory.createForClass(CategoryModel);

CategorySchema.virtual('id').get(function () {
  return this._id.toString();
});
CategorySchema.plugin(mongooseLeanVirtuals);

CategorySchema.statics.getSyncColumns = function () {
  return ['id', 'name', 'status', 'created_at', 'updated_at'];
};
