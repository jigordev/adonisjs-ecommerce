import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Product from './product.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class ProductImage extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare imageUrl: string

  @column()
  declare isPrimary: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Product)
  declare product: BelongsTo<typeof Product>
}