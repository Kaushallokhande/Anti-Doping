import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaGlobe } from 'react-icons/fa';
import logosih from '../images/logosih.jpg';
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const context = useOutletContext();
  const isLoggedIn = context?.isLoggedIn ?? false;

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Rules', href: '/rules', current: false },
    { name: 'Medical-Info', href: '/med', current: false },
    ...(isLoggedIn
      ? [
        { name: 'Dashboard', href: '/dashboard', current: false },
        { name: 'Quiz Section', href: '/quiz', current: false },
        { name: 'Menu', href: '/menu', current: false },
      ]
      : []),
    { href: '/lng', current: false, icon: <FaGlobe className="h-5 w-5" /> },
    { name: isLoggedIn ? 'Logout' : 'Login', href: isLoggedIn ? '/login' : '/login', current: false },
  ];

  return (
    <Disclosure as="nav" className="bg-white fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <img
                alt="Your Company"
                src={logosih}
                className="h-12 w-auto sm:h-16 md:h-20 lg:h-16"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-0">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'text-black' : 'text-black hover:bg-gray-200',
                      'rounded-md px-3 py-2 text-sm font-medium flex items-center'
                    )}
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {!item.icon && item.name} 
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.href}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-100 text-black' : 'text-black hover:bg-gray-200',
                'block rounded-md px-3 py-2 text-base font-medium flex items-center'
              )}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {!item.icon && item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
