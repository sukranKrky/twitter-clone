import React from 'react'
import Topic from './topic'
import { topics } from '../../../../utils/consts'
import SidebarSection from '../../../../components/sidebar-section'

export default function Topicks() {
  return (
  <SidebarSection  
  title="İlgini çekebilecek gündemler"
  more="/trends"
  >
    {topics.map((topic,index)=><Topic item={topic} key={index}/>)}

  </SidebarSection>
  )
}
