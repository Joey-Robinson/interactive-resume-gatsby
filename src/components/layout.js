import React from "react"
import Header from "./header"

const Layout = ({ children, className }) => {
  return (
    <>
      <Header />
      <main>
        <section className={className}>{children}</section>
      </main>
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
