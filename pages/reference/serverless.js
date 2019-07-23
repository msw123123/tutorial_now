import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import css from "../../static/css/style.css"

const Serverless = () => (
  <div>
    <Head>
      <title>NOW 란?</title>
    </Head>


    <div className={css.head}>
      <h1 className={css.title}>서버리스 란?</h1>
    </div>

    <div className={css.content}>
      <p className={css.content_p}>서버리스(Serverless)를 직역하자면, “서버가 없다” 라는 의미가 있다. 하지만, 사실상 서버가 없는건 아니다. 그저, 특정 작업을 수행하기
위해서 컴퓨터를 혹은 가상머신에 서버를 설정하고, 이를 통하여 처리 하는 것이 아님을 의미한다. - 서버를 소유하지 않기때문에 서버리스</p>

      <img src='/static/serverless.png'></img>

      <h3>IaaS: 인프라를 가상화하여 관리하기 쉽게 해주는 서비스 서비스를 통하여, 관리자패널에서 인프라를 구성하고, 사용</h3>
      <h3>SaaS: 클라우드 환경에서 운영되는 애플리케이션 서비스를 말한다.</h3>
      <h3>PaaS: 일반적으로 앱의 개발 및 시작과 관련된 인프라를 만들고 유지보수 하는 복잡함 없이 고객이 어플리케이션을 개발, 실행, 관리할 수 있게 하는 플랫폼 제공 형태</h3>
      <h3>BaaS: 서버리스 백엔드. 최소한의 설정으로 백엔드 구성. 코드 작업에 집중할 수 있음</h3>
      <h3>FaaS: 서버리스 백엔드. 기능단위로 쪼개서 백엔드 구성. 특정 이벤트시에만 실행</h3>

    </div>



    <style jsx>{`

    `}</style>
  </div>
)

export default Serverless
