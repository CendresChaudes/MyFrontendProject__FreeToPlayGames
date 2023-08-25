import { createStatusObj } from '@/shared/lib';

export const getGames = (state: State) => state.game.games;
const getGamesStatus = (state: State) => state.game.gamesStatus;

export const getCurrentGame = (state: State) => state.game.currentGame;
const getCurrentGameStatus = (state: State) => state.game.currentGameStatus;

export const getGamesStatusObj = createStatusObj(getGamesStatus);
export const getCurrentGameStatusObj = createStatusObj(getCurrentGameStatus);
