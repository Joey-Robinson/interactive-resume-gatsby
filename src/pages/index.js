import React from "react"
import ContactLeft from "../components/contact/contact.left"
import ContactRight from "../components/contact/contact.right"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout className="home">
    <SEO title="Home" />
    <div>
      <hgroup>
        <h1>Joey Robinson</h1>
        <h2>Trainer Resume</h2>
      </hgroup>
      <div className="line" />
      <div className="contact">
        <div className="contact--left">
          <ContactLeft />
        </div>
        <div className="contact--right">
          <ContactRight />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
