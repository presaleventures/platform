import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('~/pages/home').then(m => m.default || m)
const About = () => import('~/pages/about').then(m => m.default || m)

// Profile
const Profile = () => import('~/pages/profile/index').then(m => m.default || m)
const ProfileBookmark = () => import('~/pages/profile/bookmark').then(m => m.default || m)
const ProfileBaked = () => import('~/pages/profile/baked').then(m => m.default || m)
const ProfileMyIco = () => import('~/pages/profile/my_ico').then(m => m.default || m)

// Page for redirecting to external links
const Out = () => import('~/pages/out').then(m => m.default || m)

// Authorization pages
const Register = () => import('~/pages/register').then(m => m.default || m)
const Login = () => import('~/pages/login').then(m => m.default || m)

// Email confirm and create username pages
const CreateUsername = () => import('~/pages/create_username').then(m => m.default || m)
const SendActivation = () => import('~/pages/send_activation').then(m => m.default || m)

// Error pages
const Error404 = () => import('~/pages/error_404').then(m => m.default || m)

// Password reset
const PasswordEmail = () => import('~/pages/password/email').then(m => m.default || m)
const PasswordReset = () => import('~/pages/password/reset').then(m => m.default || m)

// Submit a project
const SubmitProject = () => import('~/pages/submit_project').then(m => m.default || m)

// Presale token
const PresaleToken = () => import('~/pages/presale_token').then(m => m.default || m)

// Project pages
const Project = () => import('~/pages/project/index').then(m => m.default || m)
const ProjectOverview = () => import('~/pages/project/overview').then(m => m.default || m)
const ProjectTeam = () => import('~/pages/project/team').then(m => m.default || m)
const ProjectRating = () => import('~/pages/project/rating').then(m => m.default || m)
const ProjectRoadmap = () => import('~/pages/project/roadmap').then(m => m.default || m)
const ProjectDetails = () => import('~/pages/project/details').then(m => m.default || m)

// Den
const SubmitAProject = () => import('~/pages/den/submit_a_project').then(m => m.default || m)
const IcoEdit = () => import('~/pages/den/ico_edit').then(m => m.default || m)
const IcoApply = () => import('~/pages/den/ico_apply').then(m => m.default || m)
const PublicProfile = () => import('~/pages/den/public_profile').then(m => m.default || m)
const ProfileKyc = () => import('~/pages/den/profile_kyc').then(m => m.default || m)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  // Profile pages
  {
    path: '/profile',
    component: Profile,
    children: [
      { path: '', name: 'profile', component: ProfileBookmark },
      { path: ':user_name', name: 'profile.info', component: ProfileBookmark },
      { path: ':user_name/baked', name: 'profile.baked', component: ProfileBaked },
      { path: ':user_name/bookmark', name: 'profile.bookmark', component: ProfileBookmark },
      { path: ':user_name/my_ico', name: 'profile.my_ico', component: ProfileMyIco }
    ]
  },

  // Project pages
  {
    path: '/presale',
    component: Project,
    children: [
      { path: '', name: 'project', component: ProjectOverview },
      { path: ':project_name', component: ProjectOverview },
      { path: ':project_name/overview', name: 'project.overview', component: ProjectOverview },
      { path: ':project_name/team', name: 'project.team', component: ProjectTeam },
      { path: ':project_name/rating', name: 'project.rating', component: ProjectRating },
      { path: ':project_name/road_map', name: 'project.road_map', component: ProjectRoadmap },
      { path: ':project_name/rating_details/:id', name: 'project.details', component: ProjectDetails }
    ]
  },
  // Page for redirecting to external links
  { path: '/out/:url', name: 'out', component: Out },
  // Authorization pages
  { path: '/register', name: 'register', component: Register },
  { path: '/login', name: 'login', component: Login },
  // Email confirm and create username pages
  { path: '/create_username', name: 'create_username', component: CreateUsername },
  { path: '/activation/', name: 'activation', component: SendActivation },
  { path: '/activation/:activation_code', name: 'activation_send', component: SendActivation },
  // Error pages
  { path: '/404', name: '404', component: Error404 },
  // Password reset
  { path: '/password/reset', name: 'password.email', component: PasswordEmail },
  { path: '/password/reset/:token', name: 'password.reset', component: PasswordReset },
  // Submit project
  { path: '/register/:type', component: Register }, // Для незарегистрированых пользователей форма регистрации с шагами
  { path: '/submit_project', component: SubmitProject },
  { path: '/presale_token', component: PresaleToken },
  /**
   * Temp routes
   */
  // Submit a project
  { path: '/den/submit', name: 'submit', component: SubmitAProject },
  // Ico edit
  { path: '/den/ico_edit', name: 'ico_edit', component: IcoEdit },
  { path: '/den/ico_apply', name: 'ico_apply', component: IcoApply },
  // Public profile
  { path: '/den/public_profile', name: 'public_profile', component: PublicProfile },
  // Public profile
  { path: '/den/profile_kyc', name: 'profile_kyc', component: ProfileKyc },
  { path: '/den/presale_token', name: 'presale_token', component: PresaleToken }
]

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  }

  let position = {}

  if (to.matched.length < 2) {
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    position = { x: 0, y: 0 }
  } if (to.hash) {
    position = { selector: to.hash }
  }

  return position
}

export function createRouter () {
  return new Router({
    routes,
    scrollBehavior,
    mode: 'history'
  })
}
