import Vue from 'vue';
import Router from 'vue-router';

import Top from '@/components/top.vue';
import PlayerSetting from '@/components/settings/player_setting.vue';
import RuleSetting from '@/components/settings/rule_setting.vue';
import RuleConfirm from '@/components/settings/rule_confirm.vue';

import GameDescription from '@/components/games/game_description.vue';

import NightDescription from '@/components/nights/night_description.vue';
import NightEnter from '@/components/nights/night_enter.vue';
import PlayerConfirm from '@/components/nights/player_confirm.vue';
import NightAction from '@/components/nights/night_action.vue';
import NightResult from '@/components/nights/night_result.vue';

import Discuss from '@/components/days/discuss.vue';
import DiscussFinish from '@/components/days/discuss_finish.vue';
import VoteDescription from '@/components/days/vote_description.vue';
import VotePlayer from '@/components/days/vote_player.vue';
import VoteResult from '@/components/days/vote_result.vue';

import GameResult from '@/components/games/game_result.vue';

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
    { path: '/game_result', name: 'GameResult', component: GameResult },
  ],
});
