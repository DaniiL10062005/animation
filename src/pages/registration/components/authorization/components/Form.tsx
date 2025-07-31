import { useDispatch, useSelector } from 'react-redux'
import './form.css'
import { useAuthorizationSchema } from './schema'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { setName } from '../../../../../slice'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import type { RootState } from '../../../../../store'

export const Form = () => {
  const dispatch = useDispatch()
  const { name } = useSelector((state: RootState) => state.user)
  type authorizationSchemaType = z.infer<ReturnType<typeof useAuthorizationSchema>>
  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
    getValues,
  } = useForm<authorizationSchemaType>({
    resolver: zodResolver(useAuthorizationSchema()),
    defaultValues: {
      name: name || '',
    },
  })
  const watcher = watch('name')

  useEffect(() => {
    dispatch(setName(getValues('name')))
  }, [watcher])

  const onSubmit = () => {
    localStorage.setItem('name', getValues('name'))
    navigate('/')
  }

  return (
    <div className="form form-animation">
      <p className="form-clue">
        Этот сайт создан для того, чтобы вы могли удобно ознакомиться с моими навыками и получше
        узнать меня.
      </p>
      <p>Давай познакомимся</p>
      <form className="authorization-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="authorization-input-container">
          <input
            placeholder="Имя"
            className="authorization-input"
            {...register('name')}
            maxLength={15}
          />
          {errors.name && <p className="validation-error">{errors.name.message}</p>}
        </div>
        <button className="authorization-button" type="submit">
          Далее
        </button>
      </form>
    </div>
  )
}
