import React from "react"
import ContactMain from "../components/contact/contact.main"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Skills from "../components/skills/skills"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContactMain />
    <Skills />
  </Layout>
)

export default IndexPage
