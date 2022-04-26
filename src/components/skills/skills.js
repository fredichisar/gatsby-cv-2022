import React, { Fragment } from "react"
import { FaUserGraduate } from "react-icons/fa"
import SectionTitle from "../sectionTitle"
import SkillBar from "./skill-bar"

const skills = ({ title = "Skills", skills = [] }) => {
  return (
    <Fragment>
      <SectionTitle
        title={title}
        name={title.toLowerCase()}
        icon={<FaUserGraduate size={28} />}
      />
      {skills.map(skill => (
        <SkillBar key={skill.title} name={skill.title} level={skill.percentage} />
      ))}
    </Fragment>
  )
}

export default skills