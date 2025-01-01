import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const HomePage: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    // Redirect to a default employee card or show a list of employees
    router.push('/0UPg5oPgaBtO7Mhe61IqqrgjDPkzzsSJ')
  }, [router])

  return (
    <Head>
      <title>Digital Cards - Somani Realtors</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  )
}

export default HomePage