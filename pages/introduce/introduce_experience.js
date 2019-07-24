import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import css from "../../static/css/style.css"

const Home = () => (
  <div>
    <Head>
      <title>NOW를 써보며</title>
    </Head>


    <div className={css.head}>
      <h1 className={css.title}>NOW를 써보며</h1>

      <div className={css.content}>
       <p>서버개발자는 뭐 먹고 사나 - 진정한 프로그래머가 되어야겠군(특히 프론트)</p>
       <p>클라이언트와 서버 코드를 하나의 레포에, 그리고 언어설정이 자유롭다(설정할게 거의 없다)</p>
       <p>aws beanstalk docker로 서버를 생성했을 땐 하나하나 다 해보고 공부해서 좋았다면, NOW는 하나하나 아무것도 하지 않아서 좋다.</p>
       <p>ZEIT는 어떻게 돈을 버는가</p>
       <p>규모가 큰 프로젝트에도 NOW(서버리스 플랫폼)가 적절한가</p>
      </div>
    </div>

    <style jsx>{`

    `}</style>
  </div>
)

export default Home
