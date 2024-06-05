import { IGamesTypes, IFormatGameData } from "../interfaces/interfaces";

export const deviceHandleHoverEffect = window.matchMedia('(hover: hover)').matches;

export const scrollToTop = (): void => {
  window.scrollTo(0, 0);
}

export const formatGameData = (gamesData: Array<IGamesTypes>): Array<Array<IFormatGameData>> => {
  return gamesData.map((data) =>
    data.games.map((gameData) => {
      let link = gameData.gameName.toLowerCase().replaceAll(' ', '-').replaceAll('.', '-').replaceAll('®', '').replaceAll(':', '');

      if (['modern-warfare-iii', 'warzone', 'modern-warfare-ii'].includes(link)) {
        link = 'call-of-duty';
      }

      return { link, gameName: gameData.gameName, gameType: data.gameType };
    })
  );
}
