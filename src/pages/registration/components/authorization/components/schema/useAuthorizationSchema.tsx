import z from 'zod'

export const useAuthorizationSchema = () => {
  return z.object({
    name: z
      .string()
      .min(1, 'Имя не может быть пустым')
      .regex(/^[a-zA-Zа-яА-ЯёЁ\s]+$/, 'Ты робот? Не слышал имен с цифрами или символами')
  })
}
