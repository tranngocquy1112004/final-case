import * as Yup from 'yup'

const yup = Yup.object({
    'email' : Yup.string().required('Email được để trống'),
    'password' : Yup.string().required('Password được để trống')
})
export default yup