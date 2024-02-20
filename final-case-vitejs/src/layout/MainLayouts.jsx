import Header from "../component/header/Header";
import Footer from "../component/footer/Footer"
import Sidebar from "../component/sidebar/Sidebar";
export default function MainLayouts ({children}) {
     return (
         
        <div className="container">
        <Header/>
        <div className="d-flex">
        <Sidebar/>
            <main className="flex-grow-1 bg-warning"> 
                {children}
            </main>
            </div>
        <Footer/> 
    </div>
       

     )
}