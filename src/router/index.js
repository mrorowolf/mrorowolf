import Vue from 'vue';
import Router from 'vue-router';

import Top from '@/components/top/page';
import PlayerSetting from '@/components/player_setting/page';
import RuleSetting from '@/components/rule_setting/page';
import RuleConfirm from '@/components/rule_confirm/page';
import GameDescription from '@/components/game_description/page';
import NightDescription from '@/components/night_description/page';
import NightEnter from '@/components/night_enter/page';
import PlayerConfirm from '@/components/player_confirm/page';
import NightAction from '@/components/night_action/page';
import NightResult from '@/components/night_result/page';
import Discuss from '@/components/discuss/page';
import DiscussFinish from '@/components/discuss_finish/page';
import VoteDescription from '@/components/vote_description/page';
import VotePlayer from '@/components/vote_player/page';
import VoteResult from '@/components/vote_result/page';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Top', component: Top },
    { path: '/player_setting', name: 'PlayerSetting', component: PlayerSetting },
    { path: '/rule_setting', name: 'RuleSetting', component: RuleSetting },
    { path: '/rule_confirm', name: 'RuleConfirm', component: RuleConfirm },
    { path: '/game_description', name: 'GameDescription', component: GameDescription },
    { path: '/night_description', name: 'NightDescription', component: NightDescription },
    { path: '/night_enter', name: 'NightEnter', component: NightEnter },
    { path: '/player_confirm', name: 'PlayerConfirm', component: PlayerConfirm },
    { path: '/night_action', name: 'NightAction', component: NightAction },
    { path: '/night_result', name: 'NightResult', component: NightResult },
    { path: '/discuss', name: 'Discuss', component: Discuss },
    { path: '/discuss_finish', name: 'DiscussFinish', component: DiscussFinish },
    { path: '/vote_description', name: 'VoteDescription', component: VoteDescription },
    { path: '/vote_player', name: 'VotePlayer', component: VotePlayer },
    { path: '/vote_result', name: 'VoteResult', component: VoteResult },
  ],
});
