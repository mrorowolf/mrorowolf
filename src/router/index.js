import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/components/top/page';
import PlayerSetting from '@/components/player_setting/page';
import RuleSetting from '@/components/rule_setting/page';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Top', component: Top },
    { path: '/player_setting', name: 'PlayerSetting', component: PlayerSetting },
    { path: '/rule_setting', name: 'RuleSetting', component: RuleSetting },
  ],
});
