import {Formik} from 'formik'
import yup from './yup';
function App() {
  const onFormSubmit = (values) => {
    console.log(values)
  }
  const validate = (values) => {
    const errors = {};
    if (values.email === "") {
      errors.email = 'Email không được để rỗng'
    };
    if (values.password === "") {
      errors.password = "Pass không được rỗng"
    }
    return errors;
  }
  return (
   <>
   <Formik initialValues={{email: "", password: ""}}
    onSubmit={onFormSubmit}
    //  validate={validate}
    validationSchema={yup}
     validateOnBlur={false}
     validateOnChange={false} >
    {({handleChange, handleBlur, values, handleSubmit, errors, touched}) =>  {
      return (
      <form>
   <div>
    <label>Email:</label>
    <input type="email" name ="email" onChange = {handleChange} onBlur={handleBlur} value={values.email}/>
    {errors.email && touched.email && <p>{errors.email}</p>}

   </div>
   <div>
    <label>Password:</label>
    <input type="password" name ="password" onChange = {handleChange} onBlur={handleBlur} value={values.password}/>
    {errors.password && touched.password && <p>{errors.password}</p>}

   </div>
   <button type='submit' onClick={handleSubmit}>Login</button>
   </form>
      )
    }
}
   </Formik>
   </>
  );
}

export default App;
