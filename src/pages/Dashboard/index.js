import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { Disclosure } from "@headlessui/react";
import Logo from "../../assets/images/Logo.png";
import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import Styles from "./style.module.scss";

const Dashboard = () => {
  return (
    <div className={``}>
      <Example />
    </div>
  );
};

export default Dashboard;

const navigation = [
  {
    name: "Dashboard",
    href: "#",
    icon: HomeIcon,
    current: true,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "E-Commerce",
    href: "#",
    icon: UsersIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Community",
    href: "#",
    icon: FolderIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Finance",
    href: "#",
    icon: CalendarIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Job Board",
    href: "#",
    icon: InboxIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Tasks",
    href: "#",
    icon: ChartBarIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  { name: "Messages", href: "#", icon: ChartBarIcon, current: false, count: 4 },
  { name: "Inbox", href: "#", icon: ChartBarIcon, current: false },
  { name: "Calendar", href: "#", icon: ChartBarIcon, current: false },
  { name: "Campaigns", href: "#", icon: ChartBarIcon, current: false },
  {
    name: "Settings",
    href: "#",
    icon: ChartBarIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Utility",
    href: "#",
    icon: ChartBarIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const secondaryNavigation = [
  {
    name: "Authentication",
    href: "#",
    icon: UsersIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Onboarding",
    href: "#",
    icon: FolderIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Components",
    href: "#",
    icon: CalendarIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 flex z-40 md:hidden'
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute top-0 right-0 -mr-12 pt-2'>
                    <button
                      type='button'
                      className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='sr-only'>Close sidebar</span>
                      <XIcon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className='flex-shrink-0 flex items-center px-4'>
                  <img className='h-8 w-auto' src={Logo} alt='mosaic' />
                </div>
                <div className='mt-5 flex-1 h-0 overflow-y-auto'>
                  <nav className='px-2 space-y-1'>
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-300"
                              : "text-gray-400 group-hover:text-gray-300",
                            "mr-4 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden='true'
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className='flex-shrink-0 w-14' aria-hidden='true'>
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className='hidden md:flex md:w-64 md:flex-col md:fixed md:top-9 md:inset-y-0'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex-1 flex flex-col min-h-0 bg-gray-800'>
            <div className='flex items-center h-16 flex-shrink-0 px-4 bg-gray-900'>
              <img className='h-8 w-auto' src={Logo} alt='mosaic logo' />
            </div>
            <div className='flex-1 flex flex-col overflow-y-auto'>
              <nav className='flex-1 px-2 py-4 space-y-1'>
                {navigation.map(item =>
                  !item.children ? (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-300"
                            : "text-gray-400 group-hover:text-gray-300",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden='true'
                      />
                      {item.name}
                      {item.count ? (
                        <span
                          className={classNames(
                            item.current
                              ? "bg-blue"
                              : "bg-[#6366F1] group-hover:bg-gray-200",
                            "ml-3 inline-block py-1 px-2 text-xs font-medium rounded-md"
                          )}
                        >
                          {item.count}
                        </span>
                      ) : null}
                    </a>
                  ) : (
                    <Disclosure as='div' key={item.name} className='space-y-1'>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            )}
                          >
                            <item.icon
                              className='mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500'
                              aria-hidden='true'
                            />
                            <span className='flex-1'>{item.name}</span>
                            <svg
                              className={classNames(
                                open
                                  ? "text-gray-400 rotate-90"
                                  : "text-gray-300",
                                "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                              )}
                              viewBox='0 0 20 20'
                              aria-hidden='true'
                            >
                              <path
                                d='M6 6L14 10L6 14V6Z'
                                fill='currentColor'
                              />
                            </svg>
                          </Disclosure.Button>
                          <Disclosure.Panel className='space-y-1'>
                            {item.children.map(subItem => (
                              <Disclosure.Button
                                key={subItem.name}
                                as='a'
                                href={subItem.href}
                                className='group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium  rounded-md text-gray-300 hover:bg-gray-700 hover:text-white'
                              >
                                {subItem.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )
                )}
              </nav>

              <div className='space-y-1'>
                <h3
                  className='px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider'
                  id='projects-headline'
                >
                  Projects
                </h3>
                <nav className='flex-1 px-2 py-4 space-y-1'>
                  {secondaryNavigation.map(item => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-300"
                            : "text-gray-400 group-hover:text-gray-300",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden='true'
                      />
                      {item.name}
                      {item.count ? (
                        <span
                          className={classNames(
                            item.current
                              ? "bg-white"
                              : "bg-gray-100 group-hover:bg-gray-200",
                            "ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"
                          )}
                        >
                          {item.count}
                        </span>
                      ) : null}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className='md:pl-64 flex flex-col'>
          <div className='sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow'>
            <button
              type='button'
              className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <MenuAlt2Icon className='h-6 w-6' aria-hidden='true' />
            </button>
            <div className='flex-1 px-4 flex justify-between'>
              <div className='flex-1 flex'>
                <form className='w-full flex md:ml-0' action='#' method='GET'>
                  <label htmlFor='search-field' className='sr-only'>
                    Search
                  </label>
                  <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
                    <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
                      <SearchIcon className='h-5 w-5' aria-hidden='true' />
                    </div>
                    <input
                      id='search-field'
                      className='block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm'
                      placeholder='Search'
                      type='search'
                      name='search'
                    />
                  </div>
                </form>
              </div>
              <div className='ml-4 flex items-center md:ml-6'>
                <button
                  type='button'
                  className='bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Profile dropdown */}
                <Menu as='div' className='ml-3 relative'>
                  <div>
                    <Menu.Button className='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      {userNavigation.map(item => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className='flex-1'>
            <div className='py-6'>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
                <h1 className='text-2xl font-semibold text-gray-900'>
                  Acne Inc.
                </h1>
              </div>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
                {/* Replace with your content */}
                <div className='py-4'>
                  <div className='border-4 border-dashed border-gray-200 rounded-lg h-96' />
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
