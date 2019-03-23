import { combineWithoutRepetitions } from '../cominations';
import { PlayerModel } from '../../models/teamTypes';
import { DEFAULT_PLAYER } from '../../data/players';


describe('combinations', () => {
  it('calculates combinations', () => {
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
    const combinations: PlayerModel[][] = combineWithoutRepetitions(players, 2);
    expect(combinations).toHaveLength(6);
  });
});