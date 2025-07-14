/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-require-imports */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { mongooseLeanVirtuals } from 'src/utils';

export type ProductDocument = ProductModel & Document;

@Schema({
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  collection: 'products',
})
export class ProductModel extends Document {
  @Prop()
  name: string;

  @Prop({ default: true })
  status: boolean;

  @Prop({required:false, type: mongoose.Schema.Types.ObjectId, ref:'CategoryModel'})
  category_id: mongoose.Types.ObjectId
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);

ProductSchema.virtual('id').get(function () {
  return this._id.toString();
});
ProductSchema.plugin(mongooseLeanVirtuals);

ProductSchema.statics.getSyncColumns = function () {
  return ['id', 'name', 'status', 'created_at', 'updated_at'];
};
