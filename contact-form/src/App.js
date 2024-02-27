import { Form, Formik } from 'formik';
import React from 'react';
function App() {
  const contactForm = (values) => {
    console.log(values)
  }
  const validate = (values) => {
  const errors = {};
  if (values.name === "") {
    errors.password = "Pass không được rỗng"
  }
  if (values.email === "") {
    errors.email = 'Email không được để rỗng'
  };
  // if (values.password === "") {
  //   errors.password = "Pass không được rỗng"
  // }
  
  return errors;
}
  return (
   <>
   <Formik initialValues={{name: "", email: "", password:"" }}
   validate={validate}
   validateOnBlur={false}
   validateOnChange={false}>
    {({handleChange, handleBlur, values, errors, touched}) => {
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
   </form> 
      )
    }
}  
 </Formik>
   </>
  );
}

export default App;
