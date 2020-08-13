import React, { useState, useEffect } from 'react'

import styles from './Sidebar.module.css'

import Slider from '../Slider/Slider'
import CheckboxList from '../CheckBox/CheckboxList'
interface Props {
  filters: Record<string, any>
}
const Sidebar = ({ filters }: Props) => {
  return (
    <div className={styles.container}>
      {filters.filterOrder.map((key: string) => {
        if (filters?.sliders.includes(key)) {
          return <Slider key={key} title={key} minRange={filters[key][0]} maxRange={filters[key][1]}></Slider>
        } else {
          return <CheckboxList key={key} title={key} checkboxList={filters[key]}></CheckboxList>
        }
      })}
    </div>
  )
}

export default Sidebar
