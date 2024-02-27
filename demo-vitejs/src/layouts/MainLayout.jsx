import Header from "../components/Header/header";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";
// import Student from "../components/student/Student";

export default function MainLayout({children}){
    return(
        <>
        <Header/>
        <div className="container d-flex"> 
            <Sidebar/>
                <main className="flex-grow-1">
                   {children}
                </main>
        </div>
       
        <Footer/>
    </>
    )
   

}
    
