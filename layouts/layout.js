import Link from "next/link"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import Image from "next/image"
import Sidebar from "../components/Slidebar"
export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-row sticky justify-start">
      <div className="fixed">
      <Sidebar/>
      </div>
      <div className="mobile:px-10 px-4 pb-10 flex justify-center">
        <main className="w-fw">{children}</main>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  )
}
