import { Match, PlayerModel, Team } from '../models/teamTypes';
import { combineWithoutRepetitions } from './cominations';
import _ from 'lodash';

export const calculateMatches = (players: PlayerModel[]): Match[] => {
  const anwesend = players.filter(player => player.anwesend === true);
  const teams: Team[] = calculatePossibleTeams(anwesend);

  const matchCandidates: Team[][] = combineWithoutRepetitions(teams, 2);

  return matchCandidates.map((teams: Team[]) => {
    const diff: number = Math.abs(
      teams.map(team => team.overallSkill)
        .reduce((acc, skill) => acc - skill)
    );

    return {
      diff,
      teams
    };
  });

};

export const calculatePossibleTeams = (players: PlayerModel[]): Team[] => {
  const numberOfPlayersInTeamOne: number = Math.floor(players.length / 2);
  const combinationsTeamOne: PlayerModel[][] = combineWithoutRepetitions(players, numberOfPlayersInTeamOne);
  const combinationsTeamTwo: PlayerModel[][] = combineWithoutRepetitions(players, players.length - numberOfPlayersInTeamOne);

  const teamsOne: Team[] = mapToTeams(combinationsTeamOne);
  const teamsTwo: Team[] = mapToTeams(combinationsTeamTwo);
  return teamsOne.concat(teamsTwo);


};


export const isSameTeam = (first: Team, second: Team): boolean => {
  if (first.players.length != second.players.length) {
    return false;
  }

  return _.differenceBy(first.players, second.players, 'id').length == 0;
};


const mapToTeams = (options: PlayerModel[][]): Team[] => {
  return options.map((players: PlayerModel[]): Team => {
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