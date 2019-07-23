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
      <h1 className={css.title}>NOW 다양한 기능들</h1>
    </div>

    <div className={css.content}>
      <p className={css.content_p}>깃헙 연동</p>
      <span>계정 연동만으로 깃헙과 연동된다</span>
      <span>풀리퀘스트 -> 스테이징 서버 / 마스터 머지 -> 프로덕션 서버</span>
      <br></br>
      <br></br>
      <p className={css.content_p}>데이터베이스 연동</p>
      <span>서버리스 DBMS(혹은 nosql) 모듈 설치 후 연동이 가능하다.</span>
      <br></br>
      <br></br>
      <p className={css.content_p}>Custom Domain 연동</p>
      <span>NOW에서 제공하는 도메인 / Custom Domain 연동</span>
      <br></br>
      <br></br>
      <p className={css.content_p}>Network</p>
      <span>전 세계에 Network Layer를 두어 빠르게 실행</span>
      <span>CDN을 통한 캐싱</span>
      <br></br>
      <br></br>
      <p className={css.content_p}>백엔드 다양한 빌드 환경</p>
      <span>각 path 마다 build를 지정해 다양한 빌드 환경 구성 가능</span>
      <br></br>
      <br></br>
      <p className={css.content_p}>등등..</p>
    </div>



    <style jsx>{`

    `}</style>
  </div>
)

export default Definition
