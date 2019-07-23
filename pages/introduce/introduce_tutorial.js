import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import css from "../../static/css/style.css"
import Axios from 'axios';



class Tutorial extends React.Component {
  // var data = {}
  // Axios.get('/api/date').then(function (response){
  //   data = response.data
  //   console.log(data)
  // })

  // static async getInitialProps ({req}) {

  //     return {
  //       data :1
  //     }
  // }

  render() {
    // Axios.get('/api/date').then(function (response){
    //   const data = response.data
    //   console.log(data)
    // });

      return (
        <div>
        <Head>
          <title>NOW 튜토리얼</title>
        </Head>
        <div className={css.head}>
          <h1 className={css.title}>NOW 튜토리얼</h1>

          <h2 className={css.secondTitle}>Static 페이지 생성</h2>

          <div className={css.content}>
            <div className={css.codeFormat}>
              <span className={css.codeContent}>npm i -g now</span>
            </div>
            <div className={css.codeFormat}>
              <span className={css.codeContent}>now login</span>
            </div>
            <div className={css.codeFormat}>
              <span className={css.codeContent}>npx create-next-app my-next-project2</span>
            </div>
            <div className={css.codeFormat}>
              <span className={css.codeContent}>now</span>
            </div>
          </div>

          <h2 className={css.secondTitle}>Backend functional api 생성</h2>

          <div className={css.content}>
            <img src='/static/api_code.png'></img>


            <div className={css.codeFormat}>
              <span className={css.codeContent}><Link href='/reference/get_api'>api code 실행</Link></span>
            </div>
          </div>

        </div>

        <style jsx>{`

        `}</style>
      </div>
      );
  }
}
export default Tutorial
