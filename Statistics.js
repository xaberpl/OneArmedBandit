class Statistics {
  constructor() {
    this.gameResults = [
      { win: true, bid: 3 },
      { win: false, bid: 2 },
      { win: false, bid: 1 },
    ];
  }
  //PROTOTYPE
  addGameToStatistics(win, bid) {
    let gameResult = {
      win,
      bid,
    };
    this.gameResults.push(gameResult);
  }
  showGameStats() {
    let games = this.gameResults.length;
    let wins = this.gameResults.filter((result) => result.win).length;
    let losses = this.gameResults.filter((result) => !result.win).length;
    return [games, wins, losses];
  }
}

const stats = new Statistics();
