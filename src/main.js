import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import resetMessage from './assets/message';
import { Tabs,TabPane,Input,Button,Row,Message,Col,MenuItem,Menu,Submenu,MenuItemGroup,
  Upload,Table,TableColumn,Pagination,MessageBox,Popover,Tag,Switch,Form,FormItem,Select,Option} from 'element-ui'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Input);
Vue.use(Button);
Vue.use(Row);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Col);
Vue.use(Tag);
Vue.use(Form);
Vue.use(Select);
Vue.use(Option);
Vue.use(FormItem);
Vue.use(MenuItemGroup);
Vue.use(Upload);
Vue.use(Table);
Vue.use(Popover)
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Switch);
Vue.component(Message.name, Message);
Vue.prototype.$message = resetMessage;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$confirm = MessageBox.confirm;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
