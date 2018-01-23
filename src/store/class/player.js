export default class Player {
  constructor(name) {
    this.id = 0;
    this.name = "";

    this.team = 0;
    this.role = 0;
    this.alive = true;

    this.votes = 0;
    this.skip = false;
    this.kill = 0;
    this.doubt = 0;

    this.fortune = false;
    this.save = false;
    this.save_last_night = false;
  }
}