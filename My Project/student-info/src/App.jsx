const students = [
  { id: 1, name :'Quy', age: 20, address: 'blabla'},
  { id: 2, name :'ThuyTien', age: 20, address: 'blabla'},
  { id: 3, name :'Phuong', age: 20, address: 'blabla'},
]
function App() {
  return (
   <>
    <h2>Student List</h2>
    {students.map(student => (
        <tr>
          <strong> ID :</strong>
           {student.id} ;
          <strong> Name :</strong>
           {student.name} ; 
          <strong> Age : </strong>
           {student.age} ; 
          <strong> Address :</strong>
           {student.address}
        </tr>
      ))}
   </>
  );
}

export default App;
