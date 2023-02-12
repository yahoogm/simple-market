import React from 'react'
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa'

export const Header = (): JSX.Element => {
  return (
    <header className="flex px-24 py-4 justify-between border-b-4 border-black items-center">
      <section className="flex space-x-10 capitalize tracking-wider items-center">
        <img src="../../public/vite.svg" />
        <a href="#">products</a>
        <a href="#">sign in</a>
        <a href="#">sign up</a>
        <a href="#">about us</a>
      </section>
      <section className="flex space-x-4 items-center">
        <a href="#">
          <FaUserAlt size={20} />
        </a>
        <a href="#">
          <FaShoppingCart size={20} />
        </a>
      </section>
    </header>
  )
}
