import ListTable from "../components/ListTable"
import SideBar from "../components/SideBar"

function page() {  
  return (    
    <>
    <section className="flex w-full items-center h-screen bg-black">
        <SideBar/>
        <ListTable/>
    </section>
    </>
  )
}

export default page