import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import css from "../../static/css/style.css"

const Home = () => (
  <div>
    <Head>
      <title>NOW 란?</title>
    </Head>


    <div className={css.head}>
      <h1 className={css.title}>NOW 란?</h1>

      <div className={css.content}>
       <p>서버리스 배포 플랫폼</p>
      </div>
    </div>

    <style jsx>{`

    `}</style>
  </div>
)

export default Home
