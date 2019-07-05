import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Page</h1>
      <p>
        You can find me via{" "}
        <a
          href="https://twitter.com/nahabi"
          target="_blank"
          rel="noopener noreferrer"
        >
          @nahabi
        </a>{" "}
        on Twitter
      </p>
    </Layout>
  )
}

export default ContactPage
