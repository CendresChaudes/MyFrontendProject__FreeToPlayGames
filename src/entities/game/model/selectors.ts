import { createStatusObj } from '@/shared/lib';

export const getGames = (state: State) => state.game.games;
export const getGamesStatus = (state: State) => state.game.gamesStatus;

export const getCurrentGame = (state: State) => state.game.currentGame;
export const getCurrentGameStatus = (state: State) => state.game.currentGameStatus;

export const getCurrentPlatformFilter = (state: State) => state.game.currentPlatformFilter;
export const getCurrentGenreFilter = (state: State) => state.game.currentGenreFilter;
export const getCurrentSortType = (state: State) => state.game.currentSortType;

export const getGamesRefetchAttemptsCount = (state: State) => state.game.gamesRefetchAttemptsCount;
export const getCurrentGameRefetchAttemptsCount = (state: State) => state.game.currentGameRefetchAttemptsCount;

export const getGamesStatusObj = createStatusObj(getGamesStatus);
export const getCurrentGameStatusObj = createStatusObj(getCurrentGameStatus);
