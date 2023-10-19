import Character from './Character';

class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.defence = 40;
    this.setAttack(10);
  }
}

export default Daemon;
