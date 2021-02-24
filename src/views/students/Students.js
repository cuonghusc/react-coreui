import React, { useState, useEffect } from 'react';
import { useHistory,useLocation } from 'react-router-dom';
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CPagination
} from '@coreui/react';

import studentsData from './StudentsData'

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
  }

const Students = () =>{
    const history = useHistory()
    const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
    const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
    const [page, setPage] = useState(currentPage)

    const pageChange = newPage => {
        currentPage !== newPage && history.push(`/students?page=${newPage}`)
    }

    useEffect(() => {
        currentPage !== page && setPage(currentPage)
    }, [currentPage, page])

    return (
        <CRow>
        <CCol>
            <CCard>
            <CCardHeader>
                Students
                <small className="text-muted"> example</small>
            </CCardHeader>
            <CCardBody>
            <CDataTable
                items={studentsData}
                fields={[
                { key: 'name', _classes: 'font-weight-bold' },
                'registered', 'role', 'status'
                ]}
                border
                hover
                striped
                itemsPerPage={10}s
                activePage={page}
                clickableRows
                onRowClick={(item) => history.push(`/students/${item.id}`)}
                scopedSlots = {{
                'status':
                    (item)=>(
                    <td>
                        <CBadge color={getBadge(item.status)}>
                        {item.status}
                        </CBadge>
                    </td>
                    )
                }}
            />
            <CPagination
                activePage={page}
                onActivePageChange={pageChange}
                pages={3}
                doubleArrows={false} 
                align="center"
            />
            </CCardBody>
            </CCard>
        </CCol>
        </CRow>
    )
}

export default Students