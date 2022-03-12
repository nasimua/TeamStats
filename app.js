const team = {
  _players: [
    {
      firstName: "Michael",
      lastName: "Jordan",
      age: 33,
    },
    {
      firstName: "Kobe",
      lastName: "Bryant",
      age: 28,
    },
    {
      firstName: "Lebron",
      lastName: "James",
      age: 23,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Heat",
      teamPoints: 54,
      opponentPoints: 29,
    },
    {
      opponent: "Cavs",
      teamPoints: 56,
      opponentPoints: 61,
    },
  ],

  get games() {
    return this._games;
  },
  get player() {
    return this._palyers;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };

    this._players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };

    this._games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

// console.log(team._players);

team.addGame("Titans", 100, 98);
team.addGame("Globetrotters", 91, 80);
team.addGame("96 Bulls", 84, 102);

console.log(team._games);
