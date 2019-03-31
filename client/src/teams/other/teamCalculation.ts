import { MatchModel, PlayerModel, TeamModel } from '../models/teamTypes';
import { combineWithoutRepetitions } from './cominations';

export const calculateMatches = (players: PlayerModel[]): MatchModel[] => {
  const anwesend = players.filter(player => player.anwesend === true);
  const teams: TeamModel[] = calculatePossibleTeams(anwesend);

  const matchCandidates: TeamModel[][] = combineWithoutRepetitions(teams, 2);

  return matchCandidates.map((teams: TeamModel[]) => {
    const diff: number = Math.abs(
      teams.map(TeamModel => TeamModel.overallSkill)
        .reduce((acc, skill) => acc - skill)
    );

    return {
      diff,
      teams
    };
  });

};

export const calculatePossibleTeams = (players: PlayerModel[]): TeamModel[] => {
  const numberOfPlayersInTeamOne: number = Math.floor(players.length / 2);
  const combinationsTeamOne: PlayerModel[][] = combineWithoutRepetitions(players, numberOfPlayersInTeamOne);


  return [];

};


const mapToTeams = (options: PlayerModel[][]): TeamModel[] => {
  return options.map((players: PlayerModel[]): TeamModel => {
    const overallSkill = calculateTeamSkill(players);

    return {
      overallSkill,
      players
    };
  });
};

export const calculateTeamSkill = (players: PlayerModel[]): number => {
  return players
    .map(player => player.speed + player.condition + player.technicalSkill)
    .reduce((n1, n2) => n1 + n2);
};