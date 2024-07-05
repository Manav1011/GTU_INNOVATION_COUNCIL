import ListTable from "../components/ListTable"
import SideBar from "../components/SideBar"
import { AuthenticateUser } from "./actions"


async function page() {    
  await AuthenticateUser()  
  return (    
    <>
    <section className="flex w-full items-center h-[100dvh] bg-black">
        <SideBar/>
        <ListTable/>
    </section>
    </>
  )
}

export default page