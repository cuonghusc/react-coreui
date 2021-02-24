import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import studentsData from './StudentsData'

const Student = ({match}) => {
  const student = studentsData.find( student => student.id.toString() === match.params.id)
  const studentDetails = student ? Object.entries(student) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            Student id: {match.params.id}
          </CCardHeader>
          <CCardBody>
              <table className="table table-striped table-hover table-bordered">
                <tbody>
                  {
                    studentDetails.map(([key, value], index) => {
                      return (
                        <tr key={index.toString()}>
                          <td>{`${key}:`}</td>
                          <td><strong>{value}</strong></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Student
