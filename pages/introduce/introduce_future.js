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
      <h1 className={css.title}>문제점(모든 serverless function flatform에 대해서)</h1>

      <div className={css.content}>
       <p>Lambda function cold start</p>
       <p>제한된 사용가능 메모리</p>
       <p>제한된 람다 실행시간(now의 경우 5분)</p>
       <p>제한된 람다 bundle 용량</p>
       <p>제한된 람다 요청 바디 용량</p>
       <p></p>
      </div>
    </div>

    <style jsx>{`

    `}</style>
  </div>
)

export default Home
