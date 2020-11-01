import React from "react"
import ContactLeft from "../components/contact/contact.left"
import ContactRight from "../components/contact/contact.right"
import Layout from "../components/layout"
import HortizontalLine from "../components/line/horizontal.line"
import SEO from "../components/seo"
import Skills from "../components/skills/skills"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="home">
      <hgroup>
        <h1>Joey Robinson</h1>
        <h2>Trainer Resume</h2>
      </hgroup>
      <HortizontalLine />
      <div className="contact">
        <div className="contact--left">
          <ContactLeft />
        </div>
        <div className="contact--right">
          <ContactRight />
        </div>
      </div>
    </section>
    <Skills />
  </Layout>
)

export default IndexPage
