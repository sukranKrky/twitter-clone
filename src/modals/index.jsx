import React from 'react'
import { useModal } from '../store/modal/hooks'
import modals from '../router/modals';

export default function Modal() {

const modal= useModal()
const currentModal=modals.find(m=>m.name===modal)

  return (
    <div className='fixed inset-0 bg-[#5b7083]/40 z-[10]  flex items-center justify-center  ' >
<div className=" bg-black max-w-[600px] max-h-[90vh] overflow-auto  rounded-2xl">

{currentModal && <currentModal.element/>}

</div>

    </div>
  )
}
