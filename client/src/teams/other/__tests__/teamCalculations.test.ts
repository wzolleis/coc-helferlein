import { calculateMatches, calculatePossibleTeams, calculateTeamSkill, mapToTeams } from '../teamCalculation';
import { PlayerModel, TeamModel } from '../../models/teamTypes';
import { DEFAULT_PLAYER } from '../../data/players';


describe('team calculation', () => {
  const players: PlayerModel[] = [
    {
      ...DEFAULT_PLAYER,
      id: '1'
    },
    {
      ...DEFAULT_PLAYER,
      id: '2'
    },
    {
      ...DEFAULT_PLAYER,
      id: '3'
    },
    {
      ...DEFAULT_PLAYER,
      id: '4'
    }
  ];
  describe('skills', () => {
    it('calculates team skill', () => {

        expect(calculateTeamSkill(players)).toEqual(600);
      }
    );
  });

  describe('matches', () => {
    it('map to teams', () => {
      const options: PlayerModel[][] = [
        [players[0], players[1]],
        [players[0], players[2]]
      ];
      const teams: TeamModel[] = mapToTeams(options);
      const team_1: TeamModel = {
        overallSkill: 300,
        players: options[0]
      };

      const team_2: TeamModel = {
        overallSkill: 300,
        players: options[1]
      };
      expect(teams).toEqual([team_1, team_2]);
    });

    it('ccalculate teams', () => {
      const teams: TeamModel[] = calculatePossibleTeams(players);
      teams.forEach(team => expect(team.players.length === 2));
      expect(teams).toHaveLength(6);
    });


    it('calculate matches', () => {
      const matches = calculateMatches(players);
      expect(matches).toHaveLength(3);
    });
  });

});

