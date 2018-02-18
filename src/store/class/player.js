export default class Player {
  constructor(name) {
    this.id = 0;
    this.name = name;

    this.team = 0;
    this.telled_name = '市民（人狼以外）';

    this.role = 0;
    this.alive = true;

    this.skip = false;

    this.votes = 0;
    this.kill = 0;
    this.doubt = 0;
    this.save = false;
    this.save_last_night = false;

    this.fortune = false;
  }
}
