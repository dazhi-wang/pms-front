import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home/index'),
      meta: {
        title: '首页',
        icon: 'dashboard'
      }
    }]
  },
  {
    path: '/info',
    component: Layout,
    redirect: '/info/infoShow',
    name: 'Info',
    meta: {
      title: '个人信息',
      icon: 'nested'
    },
    children: [{
      path: '/info/infoShow',
      name: 'InfoShow',
      component: () => import('@/views/info/infoShow/index'),
      meta: {
        title: '详细信息',
        icon: 'dashboard'
      },
    }, {
      path: '/info/ChangePassword',
      name: 'ChangePassword',
      component: () => import('@/views/info/changePassword/index'),
      meta: {
        title: '修改密码',
        icon: 'dashboard'
      },
    }]
  },
  {
    path: '/department',
    component: Layout,
    redirect: '/department/addresslist',
    name: 'Department',
    meta: {
      title: '我的部门',
      icon: 'nested'
    },
    children: [{
      path: '/department/addresslist',
      name: 'AddressList',
      component: () => import('@/views/department/addressList/index'),
      meta: {
        title: '通讯录',
        icon: 'dashboard'
      },
    }, {
      path: '/department/staff',
      name: 'Staff',
      component: () => import('@/views/department/staff/index'),
      meta: {
        title: '我的下属',
        icon: 'dashboard'
      },
    }]
  }, {
    path: '/attendance',
    component: Layout,
    redirect: '/attendance/clock',
    name: 'Attendance',
    meta: {
      title: '考勤',
      icon: 'nested'
    },
    children: [{
      path: '/attendance/clock',
      name: 'Clock',
      component: () => import('@/views/attendance/clock/index'),
      meta: {
        title: '打卡',
        icon: 'dashboard'
      },
    }, {
      path: '/attendance/record',
      name: 'Record',
      component: () => import('@/views/attendance/record/index'),
      meta: {
        title: '考勤记录',
        icon: 'dashboard'
      },
    }, {
      path: '/attendance/calendar',
      name: 'Calendar',
      component: () => import('@/views/attendance/calendar/index'),
      meta: {
        title: '年历',
        icon: 'dashboard'
      },
    }, {
      path: '/attendance/balance',
      name: 'Balance',
      component: () => import('@/views/attendance/balance/index'),
      meta: {
        title: '假期余额',
        icon: 'dashboard'
      },
    }, {
      path: '/attendance/pay',
      name: 'Pay',
      component: () => import('@/views/attendance/pay/index'),
      meta: {
        title: '我的薪酬',
        icon: 'dashboard'
      },
    }, {
      path: '/attendance/assess',
      name: 'Assess',
      component: () => import('@/views/attendance/assess/index'),
      meta: {
        title: '奖罚考核',
        icon: 'dashboard'
      },
    }, {
      path: '/attendance/apply',
      name: 'Apply',
      component: () => import('@/views/attendance/apply/index'),
      meta: {
        title: '请假申请',
        icon: 'dashboard'
      },
    }, {
      path: '/attendance/approve',
      name: 'Approve',
      component: () => import('@/views/attendance/approve/index'),
      meta: {
        title: '审批',
        icon: 'dashboard'
      },
    }]
  },
  {
    path: '/task',
    component: Layout,
    redirect: '/task/mytask/unfinished',
    name: 'Task',
    meta: {
      title: '任务',
      icon: 'nested'
    },
    children: [{
      path: '/task/mytask',
      redirect: '/task/mytask/unfinished',
      name: 'Mytask',
      component: () => import('@/views/task/mytask/index'),
      meta: {
        title: '我的任务',
        icon: 'dashboard'
      },
      children: [{
          path: '/task/mytask/unfinished',
          name: 'Unfinished',
          component: () => import('@/views/task/mytask/unfinished/index'),
          meta: {
            title: '未完成任务',
            icon: 'dashboard'
          },
        },
        {
          path: '/task/mytask/finished',
          name: 'Finished',
          component: () => import('@/views/task/mytask/finished/index'),
          meta: {
            title: '已完成任务',
            icon: 'dashboard'
          },
        }
      ]
    }, {
      path: '/task/release',
      name: 'Release',
      component: () => import('@/views/task/release/index'),
      meta: {
        title: '发布任务',
        icon: 'dashboard'
      },
    }]
  }, {
    path: '/file',
    component: Layout,
    redirect: '/flie/down',
    name: 'File',
    meta: {
      title: '内部文件',
      icon: 'nested'
    },
    children: [{
      path: '/file/down',
      name: 'Down',
      component: () => import('@/views/file/down/index'),
      meta: {
        title: '查看下载',
        icon: 'dashboard'
      },
    }, {
      path: '/file/upload',
      name: 'Upload',
      component: () => import('@/views/file/upload/index'),
      meta: {
        title: '上传文件',
        icon: 'dashboard'
      },
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: {
      title: 'Example',
      icon: 'el-icon-s-help'
    },
    children: [{
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: {
          title: 'Table',
          icon: 'table'
        }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: {
          title: 'Tree',
          icon: 'tree'
        }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Form',
      component: () => import('@/views/form/index'),
      meta: {
        title: 'Form',
        icon: 'form'
      }
    }]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [{
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: {
          title: 'Menu1'
        },
        children: [{
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: {
              title: 'Menu1-1'
            }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: {
              title: 'Menu1-2'
            },
            children: [{
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: {
                  title: 'Menu1-2-1'
                }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: {
                  title: 'Menu1-2-2'
                }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: {
              title: 'Menu1-3'
            }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: {
          title: 'menu2'
        }
      }
    ]
  },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
