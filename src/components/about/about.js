import React, { Fragment } from "react"
import { FaUserAlt } from "react-icons/fa"
import SectionTitle from "../sectionTitle"

const about =  ({ title = "about", text = "" }) => {
  return (
    <Fragment>
      <SectionTitle title="About" name="about" icon={<FaUserAlt size={28} />} />
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </Fragment>
  )
}
export default about