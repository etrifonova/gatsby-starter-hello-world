import React from 'react'
import Layout from '../components/Layout'
import * as aboutStyles from '../examples/about.module.css'

const about = () => {
  return (
    <Layout>
      <div className={aboutStyles.page}>
        <h2>This is the About page</h2>
        <p className={aboutStyles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eaque maxime tempora modi vel blanditiis fugit? Sunt praesentium distinctio quisquam exercitationem consequuntur repellat tempora natus. Repellat nostrum rerum numquam provident!
        Corrupti, beatae suscipit soluta nemo itaque ex id necessitatibus sapiente aut nam magni qui excepturi, ratione iusto architecto pariatur quia autem vitae quisquam. Sequi, officia odio corporis veniam odit aliquid.
        Laboriosam odio atque amet porro quasi totam aspernatur expedita voluptates, error, quia molestiae blanditiis cupiditate optio. Rem, distinctio molestiae eaque esse asperiores tempora soluta natus, consequuntur facilis quidem cumque non.</p>
      </div>
    </Layout>
  )
}

export default about