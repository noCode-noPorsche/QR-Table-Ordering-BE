import { DishStatusValues } from '@/constants/type'
import z from 'zod'

export const DishSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.coerce.number(),
  description: z.string(),
  image: z.string(),
  status: z.enum(DishStatusValues),
  createdAt: z.date(),
  updatedAt: z.date()
})

export const CreateDishBody = z.object({
  name: z.string().min(1).max(256),
  price: z.coerce.number().positive(),
  description: z.string().max(10000),
  image: z.string().url(),
  status: z.enum(DishStatusValues).optional()
})

export type CreateDishBodyType = z.TypeOf<typeof CreateDishBody>

export const DishRes = z.object({
  data: DishSchema,
  message: z.string()
})

export type DishResType = z.TypeOf<typeof DishRes>

export const DishListRes = z.object({
  data: z.array(DishSchema),
  message: z.string()
})

export type DishListResType = z.TypeOf<typeof DishListRes>

export const UpdateDishBody = CreateDishBody

export type UpdateDishBodyType = CreateDishBodyType

export const DishParams = z.object({
  id: z.coerce.number()
})

export type DishParamsType = z.TypeOf<typeof DishParams>

export const GetDishListWithPaginationQuery = z.object({
  page: z.coerce.number().positive().lte(10000).default(1),
  limit: z.coerce.number().positive().lte(10000).default(10)
})

export type GetDishListWithPaginationQueryType = z.TypeOf<typeof GetDishListWithPaginationQuery>

export const GetDishListWithPaginationRes = z.object({
  data: z.object({
    totalItem: z.number(),
    totalPage: z.number(),
    page: z.number(),
    limit: z.number(),
    items: z.array(DishSchema)
  }),
  message: z.string()
})

export type GetDishListWithPaginationResType = z.TypeOf<typeof GetDishListWithPaginationRes>
