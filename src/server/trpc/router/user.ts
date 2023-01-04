import { z } from 'zod'
import {protectedProcedure, publicProcedure, router} from '../trpc'

export const userRouter = router({
    getUserData: protectedProcedure.query(({ ctx }) => {
        const user = ctx.session.user
        return user
    }),
    doUserSignUp: publicProcedure
    .input(z.object({name: z.string(), username: z.string(), email: z.string(), password: z.string()}))
    .mutation(async ({ctx, input}) => {
        const user = await ctx.prisma.user.create({
            data: {
                name: input.name,
                username: input.username,
                email: input.email,
                password: input.password
            }
        })
        console.log(user)
        return user
    })
})