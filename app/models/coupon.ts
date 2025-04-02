import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import Order from './order.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Coupon extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare code: string

  @column()
  declare discountPercentage: number

  @column()
  declare minOrderValue: number

  @column()
  declare maxUsers: number
  
  @column.dateTime()
  declare validUntil: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Order)
  declare orders: HasMany<typeof Order>
}