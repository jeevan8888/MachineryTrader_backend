import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Category } from 'src/category/schemas/category.schema';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Category',
    required: true,
  })
  category: Category;

  @Prop({ required: true })
  price: number;

  @Prop()
  description: string;

  @Prop({ type: MongooseSchema.Types.Mixed })
  details: Record<string, any>;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
