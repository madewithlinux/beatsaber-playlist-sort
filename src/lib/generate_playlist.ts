import type { LeaderboardInfoResponse } from './beatleader';

export type CharacteristicName = 'Standard';
export type DifficultyName = 'Normal' | 'Easy' | 'Hard' | 'Expert' | 'ExpertPlus';

export interface PlaylistDifficulty {
	characteristic: CharacteristicName;
	name: DifficultyName;
}
export interface PlaylistSong {
	songName: string;
	levelAuthorName: string;
	hash: string;
	levelid: string;
	difficulties: PlaylistDifficulty[];
}
export interface Playlist {
	playlistTitle: string;
	playlistAuthor: string;
	songs: PlaylistSong[];
	image: string;
	customData?: any;
}

export const generatePlaylistObject = (
	maps: LeaderboardInfoResponse[],
	playlistTitle: string,
	playlistAuthor: string,
): Playlist => {
	const songs: PlaylistSong[] = maps.map(
		(lb): PlaylistSong => ({
			songName: lb.song?.name!,
			levelAuthorName: lb.song?.mapper!,
			hash: lb.song?.hash!,
			levelid: `custom_level_${lb.song?.hash}`,
			difficulties: [
				{
					characteristic: lb.difficulty?.modeName! as CharacteristicName,
					name: lb.difficulty?.difficultyName! as DifficultyName,
				},
			],
		}),
	);
	return {
		playlistTitle,
		playlistAuthor,
		songs,
		image: '',
	};
};

export const generatePlaylistDataURI = (
	maps: LeaderboardInfoResponse[],
	playlistTitle: string,
	playlistAuthor: string,
): string => {
	const playlistObject = generatePlaylistObject(maps, playlistTitle, playlistAuthor);
	return 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(playlistObject));
};
