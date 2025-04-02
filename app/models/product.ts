import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import Category from './category.js'
import type { BelongsTo, HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import ProductImage from './product_image.js'
import ProductReview from './product_review.js'
import Discount from './discount.js'
import ProductAttribute from './product_attribute.js'
import Brand from './brand.js'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare price: number

  @column()
  declare stockQuantity: number

  @column()
  declare sku: string

  @column()
  declare weight: number

  @column()
  declare dimensions: { length: number, width: number, height: number}

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Category)
  declare category: BelongsTo<typeof Category>

  @belongsTo(() => Brand)
  declare brand: BelongsTo<typeof Brand>

  @hasMany(() => ProductImage)
  declare images: HasMany<typeof ProductImage>

  @hasMany(() => ProductAttribute)
  declare attributtes: HasMany<typeof ProductAttribute>

  @hasMany(() => ProductReview)
  declare reviews: HasMany<typeof ProductReview>

  @hasOne(() => Discount)
  declare discounts: HasOne<typeof Discount>
}