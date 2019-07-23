import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import css from "../../static/css/style.css"

const Definition = () => (
  <div>
    <Head>
      <title>NOW 란?</title>
    </Head>


    <div className={css.head}>
      <h1 className={css.title}>NOW 란?</h1>
    </div>

    <div className={css.content}>
      <p className={css.content_p}><Link href='/reference/serverless'>서버리스</Link> 배포 플랫폼</p>
      <span>- 최소한의 구성만으로 즉시 배포하고 자동으로 확장하며 감독이 필요없는 웹 사이트 및 웹 서비스를 호스팅 가능</span>
      <br></br>
      <br></br>
      <span>- BaaS의 한 형태로 볼 수 있음</span>
    </div>



    <style jsx>{`

    `}</style>
  </div>
)

export default Definition
