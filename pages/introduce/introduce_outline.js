import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import css from "../../static/css/style.css"
// import Nav from '../components/nav'

const Introduce = () => (
  <div>
    <Head>
      <title>나우 - 개요</title>
    </Head>

    {/* <Nav /> */}

    <div className={css.hero}>
      <h1 className={css.title}>목차</h1>

      <div className={css.row}>
        <ul>
          <ol>
            <h3>
              <Link href='introduce_definition'>1. NOW란?</Link>
            </h3>
          </ol>
          <ol>
            <h3><Link href='introduce_tutorial'>2. NOW 튜토리얼</Link></h3>
          </ol>
          <ol>
            <h3><Link href='introduce_etc'>3. NOW 그 외 기능들</Link></h3>
          </ol>
          <ol>
            <h3><Link href='introduce_future'>4. 서버리스 배포 자동화의 미래</Link></h3>
          </ol>
        </ul>
      </div>
    </div>

    <style jsx>{`
    `}</style>
  </div>
)

export default Introduce
