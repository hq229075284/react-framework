import { useRouterHistory } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'

const history = useRouterHistory(createHashHistory)({
  // basename: '/base-path',
  // queryKey: false,
})

export default history
