import { PlayerModel, Team } from '../../models/teamTypes';
import { DEFAULT_PLAYER } from '../../data/players';
import { calculatePossibleTeams, calculateTeamSkill } from '../teamCalculation';


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
    it('creates matches', () => {
      const teams: Team[] = calculatePossibleTeams(players);
      teams.forEach(team => expect(team.players.length === 2));
      expect(teams).toHaveLength(3);
    });
  });

});

