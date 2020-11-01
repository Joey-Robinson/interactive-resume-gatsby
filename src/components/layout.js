import React from "react"

const Layout = ({ children, className }) => {
  return (
    <>
      <main>
        <section className={className}>{children}</section>
      </main>
    </>
  )
}

export default Layout
