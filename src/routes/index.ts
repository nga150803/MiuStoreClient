import { Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import config from '../config'
import Login from '../pages/auth/Login/Login'
import Register from '../pages/auth/Register/Register'
import AuthLayout from '../layout/AuthLayout/AuthLayout'
import Welcome from '../component/share/Welcome/Welcome'
import MainLayout from '../layout/components/MainLayout/MainLayout'
import Shop from '../pages/Shop/Shop'
import Detail from '../pages/Detail/Detail'
import Contact from '../pages/Contact/Contact'
import About from '../pages/About/About'
import Cart from '../pages/Cart/Cart'
import Blog from '../pages/Blog/Blog'
import Profile from '../pages/Profile/Profile'
import OrderManager from '../pages/Profile/OrderManager'
import Order from '../pages/Order/Order'
import DetailBill from '../pages/Order/DetailBill'
import MyBill from '../pages/MyBill'
interface Route {
  path: string
  component: any
  layout: any
}

const publicRoutes: Route[] = [
  {
    path: config.routes.welcome,
    component: Welcome,
    layout: null
  },
  {
    path: config.routes.home,
    component: Home,
    layout: MainLayout
  },
  {
    path: config.routes.login,
    component: Login,
    layout: AuthLayout
  },
  {
    path: config.routes.register,
    component: Register,
    layout: AuthLayout
  },
  {
    path: config.routes.profile,
    component: Profile,
    layout: null
  },
  {
    path: config.routes.ordermanager,
    component: OrderManager,
    layout: null
  },
  {
    path: config.routes.shop,
    component: Shop,
    layout: null
  },
  {
    path: config.routes.detail,
    component: Detail,
    layout: null
  },
  {
    path: config.routes.contact,
    component: Contact,
    layout: null
  },
  {
    path: config.routes.about,
    component: About,
    layout: null
  },
  {
    path: config.routes.blog,
    component: Blog,
    layout: null
  },
  {
    path: config.routes.cart,
    component: Cart,
    layout: null
  },
  {
    path: config.routes.order,
    component: Order,
    layout: null
  },
  {
    path: config.routes.bill,
    component: DetailBill,
    layout: null
  },
  {
    path: config.routes.myBill,
    component: MyBill,
    layout: MainLayout
  }
]
const privateRoutes: Route[] = []
export { publicRoutes, privateRoutes }
