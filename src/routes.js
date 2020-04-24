import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import TablesView from './components/views/Tables.vue'
import TasksView from './components/views/Tasks.vue'
import SettingView from './components/views/Setting.vue'
import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'
import DataDasar from './components/views/DataDasar.vue'
import CapaianUnit from './components/views/CapaianUnit.vue'
import JenisSatker from './components/views/JenisSatker.vue'
import SatuanKerja from './components/views/SatuanKerja.vue'
import IndikatorPeriode from './components/views/IndikatorPeriode.vue'
import IndikatorSatuanKerja from './components/views/IndikatorSatuanKerja.vue'
import IndikatorSatuanKerjaLog from './components/views/IndikatorSatuanKerjaLog.vue'
import MasterIndikator from './components/views/MasterIndikator.vue'
import Periode from './components/views/Periode.vue'
import Aspek from './components/views/Aspek.vue'
import Jexcel from './components/views/Jexcel.vue'
// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }, {
        path: 'tables',
        component: TablesView,
        name: 'Tables',
        meta: {description: 'Simple and advance table in CoPilot'}
      }, {
        path: 'tasks',
        component: TasksView,
        name: 'Tasks',
        meta: {description: 'Tasks page in the form of a timeline'}
      }, {
        path: 'setting',
        component: SettingView,
        name: 'Settings',
        meta: {description: 'User settings page'}
      }, {
        path: 'access',
        component: AccessView,
        name: 'Access',
        meta: {description: 'Example of using maps'}
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers', requiresAuth: true}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Repository',
        meta: {description: 'List of popular javascript repos'}
      }, {
        path: 'datadasar',
        component: DataDasar,
        name: 'DataDasar',
        meta: {description: 'JavaScript Excel'}
      }, {
        path: 'capaian_unit',
        component: CapaianUnit,
        name: 'CapaianUnit',
        meta: {description: 'JavaScript Excel'}
      }, {
        path: 'jenissatker',
        component: JenisSatker,
        name: 'JenisSatker',
        meta: {description: 'JavaScript Excel'}
      }, {
        path: 'satuankerja',
        component: SatuanKerja,
        name: 'SatuanKerja',
        meta: {description: 'JavaScript Excel'}
      }, {
        path: 'indikatorperiode',
        component: IndikatorPeriode,
        name: 'IndikatorPeriode',
        meta: {description: 'JavaScript Excel'}
      }, {
        path: 'indikatorsatuankerja',
        component: IndikatorSatuanKerja,
        name: 'IndikatorSatuanKerja',
        meta: {description: 'JavaScript Excel'}
      }, {
        path: 'indikatorsatuankerjalog',
        component: IndikatorSatuanKerjaLog,
        name: 'IndikatorSatuanKerjaLog',
        meta: {description: 'JavaScript Excel'}
      }, {
        path: 'masterindikator',
        component: MasterIndikator,
        name: 'MasterIndikator',
        meta: {description: 'JavaScript Excel'}
      }, {
        path: 'periode',
        component: Periode,
        name: 'Periode',
        meta: {description: 'JavaScript Excel'}
      }, {
        path: 'aspek',
        component: Aspek,
        name: 'Aspek',
        meta: {description: 'JavaScript Excel'}
      }, {
        path: 'jexcel',
        component: Jexcel,
        name: 'Jexcel',
        meta: {description: 'JavaScript Excel'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
