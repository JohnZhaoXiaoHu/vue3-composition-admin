/*
 * @Description: element 组件
 * @Author: ZY
 * @Date: 2020-12-25 08:45:49
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-26 16:00:00
 */

import {
  ElButton,
  ElSelect,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElIcon,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElPopover,
  ElMessage
} from 'element-plus'
import '@/styles/element-variables.scss'
export default function loadComponent(app: any) {
  app.use(ElButton)
  app.use(ElSelect)
  app.use(ElBreadcrumb)
  app.use(ElBreadcrumbItem)
  app.use(ElIcon)
  app.use(ElDropdown)
  app.use(ElDropdownMenu)
  app.use(ElDropdownItem)
  app.use(ElPopover)
  app.use(ElMessage)

  app.config.globalProperties.$message = ElMessage
}
