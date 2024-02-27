import Header from "../component/header/Header";
import Footer from "../component/footer/Footer"
export default function MainLayouts ({children}) {
     return (
         <>
    <div className="container">
        <Header/>
        {/* <div className="d-flex">
            <main className="flex-grow-1">  */}
                {children}
            {/* </main>
        </div> */}
        <Footer/> 
   </div>
    </> 

     )
}