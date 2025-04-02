import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import OrderItem from './order_item.js'
import Payment from './payment.js'
import Shipping from './shipping.js'
import Coupon from './coupon.js'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare totalPrice: number

  @column()
  declare status: string

  @column()
  declare trackingCode: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Coupon)
  declare coupon: BelongsTo<typeof Coupon>

  @hasMany(() => OrderItem)
  declare orderItem: HasMany<typeof OrderItem>

  @hasOne(() => Payment)
  declare payment: HasOne<typeof Payment>

  @hasOne(() => Shipping)
  declare shipping: HasOne<typeof Shipping>
}