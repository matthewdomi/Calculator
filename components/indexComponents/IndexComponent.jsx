import React from 'react'
import Head from 'next/head'

const CreateIndex = () => {
  return (
    <div>
        <Head>
            <title>Calculadora online</title>
            <meta name="description" content="Calculadora online hecha en next.js" />
             <link rel="icon" href="/favicon.ico" />
        </Head>
        {<p>Hello world!</p>}
        
    </div>
  )
}

export default CreateIndex