import classNames from "classnames"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useMemo } from "react"
import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  UsersIcon,
  VideosIcon,
  ProfileImages,
} from "./icons"
const menuItems = [
  { id: 1, label: "Home", icon: HomeIcon, link: "/" },
  { id: 2, label: "Manage Posts", icon: ArticleIcon, link: "/posts" },
  { id: 3, label: "Manage Users", icon: UsersIcon, link: "/users" },
  { id: 4, label: "Manage Tutorials", icon: VideosIcon, link: "/tutorials" },
]

const profileItems = [
  { id: 1, label: "Anuyesh Mishra", icon: ProfileImages, link: "/" },
  { id: 2, label: "Manage Posts", icon: ArticleIcon, link: "/posts" },
  { id: 3, label: "Manage Users", icon: UsersIcon, link: "/users" },
  { id: 4, label: "Manage Tutorials", icon: VideosIcon, link: "/tutorials" },
]

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false)
  const [isCollapsible, setIsCollapsible] = useState(false)

  const router = useRouter()

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  )

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  )

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  )

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu.id === menu.id,
      }
    )
  }

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible)
  }

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse)
  }

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <LogoIcon />
            <span
              className={classNames("mt-2 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            ></span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu)
            return (
              <div className={classes}>
                <Link href={menu.link}>
                  <a className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col items-start mt-24">
      <a className="flex px-3 items-center w-full h-full">   
      <div className="flex justify-center">
              <img
                class="w-4 h-4 mb-3 rounded-full shadow-lg"
                src="/docs/images/people/profile-picture-3.jpg"
              />
              {!toggleCollapse && (
              <div className="flex flex-col items-centerr">
                <p class="text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Visual Designer
                </p>
              </div>
              )}             
            </div>
            </a>
            <a className="flex px-3 items-center w-full h-full">
            <div class="flex mt-4 space-x-3 md:mt-6">
            {!toggleCollapse && (
              <button
                type="button"
                class="flex text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                <svg
                  class="mr-2 -ml-1 w-4 h-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="paypal"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"
                  ></path>
                </svg>
                Add Items
              </button>)}
            </div>
            </a>
        <a className="flex py-4 px-3 items-center w-full h-full">
          <div style={{ width: "2.5rem" }}>
            <VideosIcon />
          </div>
          {!toggleCollapse && (
            <span className={classNames("text-md font-medium text-text-light")}>
             Explore More
            </span>
          )}
        </a>
        <a className="flex px-3 items-center w-full h-full">
          <div style={{ width: "2.5rem" }}>
            <VideosIcon />
          </div>
          {!toggleCollapse && (
            <span className={classNames("text-md font-medium text-text-light")}>
              Products
            </span>
          )}
        </a>
      </div>
    </div>
  )
}

export default Sidebar



