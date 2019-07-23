import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import css from "../../static/css/style.css"

const Home = () => (
  <div>
    <Head>
      <title>NOW 튜토리얼</title>
    </Head>


    <div className={css.head}>
      <h1 className={css.title}>NOW 튜토리얼</h1>

      <div className={css.content}>
        <div className={css.codeFormat}>
          <span className={css.codeContent}>npm i -g now</span>
        </div>
        <div className={css.codeFormat}>
          <span className={css.codeContent}>now login</span>
        </div>
        <div className={css.codeFormat}>
          <span className={css.codeContent}>now</span>
        </div>
      </div>
    </div>

    <style jsx>{`

    `}</style>
  </div>
)

export default Home
