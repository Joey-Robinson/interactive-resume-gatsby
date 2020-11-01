import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
        <li>
          <Link to="/experience/">Experience</Link>
        </li>
        <li>
          <Link to="/skills/">Skills</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
