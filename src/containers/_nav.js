import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Main']
  },
  {
    _tag:'CSidebarNavDropdown',
    name:'Products',
    icon:'cil-list',
    _children:[
      {
        _tag:'CSidebarNavItem',
        name:'Add New Products',
        to:'/product/create',
      },
      {
        _tag:'CSidebarNavItem',
        name:'Products List',
        to:'/products',
      },
    ]
  }
]

export default _nav
