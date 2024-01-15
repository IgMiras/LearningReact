import './Form.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const Form = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required('Your full name is Required!'),
        email: yup.string().email().required('Insert an actual Email'),
        age: yup.number().positive().integer().min(18).required('Insert a valid age'),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords Do not Match').required()
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='Form' >
            <input type="text" placeholder="Full Name..." {...register('fullName')} />
            {errors.fullName ? <p>{errors.fullName.message}</p> : ""}
            <input type="text" placeholder="Email..." {...register('email')} />
            {errors.email ? <p>{errors.email.message}</p> : ""}
            <input type="number" placeholder="Age..." {...register('age')} />
            {errors.age ? <p>{errors.age.message}</p> : ""}
            <input 
                type="password"
                placeholder="Password..."
                {...register('password')}
            />
            {errors.password ? <p>{errors.password.message}</p> : ""}
            <input
                type="password"
                placeholder="Confirm Password..."
                {...register('confirmPassword')}
            />
            {errors.confirmPassword ? <p>{errors.confirmPassword.message}</p> : ""}
            <input type="submit" />
        </form>
    )
}