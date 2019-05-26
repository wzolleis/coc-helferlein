import { MatchModel, PlayerModel, TeamModel } from '../models/teamTypes';
import { combineWithoutRepetitions } from './cominations';

export const calculateMatches = (players: PlayerModel[]): MatchModel[] => {
  const anwesend = players.filter(player => player.anwesend);
  const teams: TeamModel[] = calculatePossibleTeams(anwesend);

  const matches: MatchModel[] = teams.map(team => mapToMatch(team, anwesend));

  // compare matches and check player ids,
  // reduce matches, push only matches into array, if not present (according to previous compare function)
  // return reduced matches

  return matches;

};

export const calculatePossibleTeams = (players: PlayerModel[]): TeamModel[] => {
  const numberOfPlayersInTeamOne: number = Math.floor(players.length / 2);
  const combinationsTeamOne: PlayerModel[][] = combineWithoutRepetitions(players, numberOfPlayersInTeamOne);
  return mapToTeams(combinationsTeamOne);
};

export const mapToTeams = (options: PlayerModel[][]): TeamModel[] => {
  return options.map((players: PlayerModel[]): TeamModel => mapToTeam(players));
};

const mapToTeam = (players: PlayerModel[]) => {
  const overallSkill = calculateTeamSkill(players);

  return {
    overallSkill,
    players
  };
};

export const calculateTeamSkill = (players: PlayerModel[]): number => {
  return players
    .map(player => player.speed + player.condition + player.technicalSkill)
    .reduce((n1, n2) => n1 + n2);
};

export const mapToMatch = (team: TeamModel, allPlayers: PlayerModel[]): MatchModel => {
  const otherTeam: TeamModel = mapToTeam(allPlayers.filter(player => !team.players.includes(player)));

  return {
    diff: Math.abs(team.overallSkill - otherTeam.overallSkill),
    teams: [team, otherTeam]
  };
};