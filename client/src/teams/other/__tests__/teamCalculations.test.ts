import { calculateMatches, calculatePossibleTeams, mapToTeams, removeDuplicates } from '../teamCalculation';
import { PlayerModel, TeamModel } from '../../models/teamTypes';
import { DEFAULT_PLAYER } from '../../data/players';
import { Team } from '../../models/Team';
import { Match } from '../../models/Match';


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

  describe('teams', () => {
    it('calculates team skill', () => {
      const team: Team = new Team(players);
      expect(team.overallSkill).toEqual(600);
      }
    );

    it('ccalculate teams', () => {
      const teams: TeamModel[] = calculatePossibleTeams(players);
      teams.forEach(team => expect(team.players.length === 2));
      expect(teams).toHaveLength(6);
    });

    it('map to teams', () => {
      const options: PlayerModel[][] = [
        [players[0], players[1]],
        [players[0], players[2]]
      ];
      const teams: TeamModel[] = mapToTeams(options);
      const team_1: TeamModel = new Team(options[0]);
      const team_2: TeamModel = new Team(options[1]);
      expect(teams).toEqual([team_1, team_2]);
    });
  });

  describe('matches', () => {
    describe('compare matches', () => {
      const home: TeamModel = new Team([players[0], players[1]]);
      const away: TeamModel = new Team([players[2], players[3]]);

      const match_1 = new Match(home, away);
      const match_2 = new Match(away, home);

      it('is same match, home, away vertauscht', () => {
        expect(match_1.isSameMatch(match_2)).toBeTruthy();
        expect(match_2.isSameMatch(match_1)).toBeTruthy();
      });

      it('is same match, when compared to self', () => {
        expect(match_1.isSameMatch(match_1)).toBeTruthy();
        expect(match_2.isSameMatch(match_2)).toBeTruthy();
      });

      it('is  not same match with different players', () => {
        const differentTeam: TeamModel = new Team([players[0], players[2]]);
        const match_3 = new Match(home, differentTeam);
        expect(match_1.isSameMatch(match_3)).toBeFalsy();
        expect(match_2.isSameMatch(match_3)).toBeFalsy();
      });
    });

    it('calculate matches', () => {
      const matches = calculateMatches(players);
      expect(matches).toHaveLength(3);
    });

    it('removes duplicates from matches', () => {
      const home: TeamModel = new Team([players[0], players[1]]);
      const away: TeamModel = new Team([players[2], players[3]]);

      const match_1 = new Match(home, away);
      const match_2 = new Match(away, home);
      const matches = [match_1, match_2];

      const removed = removeDuplicates(matches);
      expect(removed).toHaveLength(1);
      expect(removed).toContain(match_1);
    });
  });

});

