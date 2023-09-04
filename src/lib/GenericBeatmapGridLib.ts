import type {
	LeaderboardInfoResponse,
	LeaderboardResponse,
	ScoreResponseWithMyScore,
	ScoreResponseWithAcc,
	ScoreResponse,
	Song,
	DifficultyDescription,
} from '$lib/beatleader';

export interface RowScope {
	// difficulty
	nps: number;
	njs: number;
	stars: number;
	predictedAcc: number;
	passStars: number;
	accStars: number;
	techStars: number;
	notes: number;
	bombs: number;
	walls: number;
	duration: number;

	// ScoreResponse
	baseScore?: number;
	modifiedScore?: number;
	accuracy?: number;
	pp?: number;
	bonusPp?: number;
	passPP?: number;
	accPP?: number;
	techPP?: number;
	rank?: number;
	countryRank?: number;
	fcAccuracy?: number;
	fcPp?: number;
	weight?: number;
	badCuts?: number;
	missedNotes?: number;
	bombCuts?: number;
	wallsHit?: number;
	pauses?: number;
	fullCombo?: boolean;
	maxCombo?: number;
	maxStreak?: number;
	timepost?: number;
	playCount?: number;

	// calculated
	ranked?: boolean;
}

export interface GenericBeatmapGridRow {
	sortWeight: number;
	scope: RowScope;
	leaderboardInfo?: LeaderboardInfoResponse;
	leaderboard?: Partial<LeaderboardResponse> & Partial<LeaderboardInfoResponse>;
	scoreResponse?: ScoreResponse & Partial<ScoreResponseWithMyScore> & Partial<ScoreResponseWithAcc>;
	song?: Song;
	difficultyDescription?: DifficultyDescription;
}

export const fillGenericBeatmapGridRows = (rows: Partial<GenericBeatmapGridRow>[]): GenericBeatmapGridRow[] => {
	return rows.map(fillGenericBeatmapGridRowFields);
};

const fillGenericBeatmapGridRowFields = (row0: Partial<GenericBeatmapGridRow>): GenericBeatmapGridRow => {
	const row = { ...row0 };
	row.sortWeight = row.sortWeight ?? 0;
	row.leaderboard = row.leaderboard ?? row.leaderboardInfo ?? row.scoreResponse?.leaderboard;
	row.song = row.song ?? row.leaderboard?.song ?? row.scoreResponse?.leaderboard?.song;
	row.difficultyDescription = row.difficultyDescription ?? row.leaderboard?.difficulty;
	row.scope = getRowScope(row);
	return row as GenericBeatmapGridRow;
};

const getRowScope = (row: Partial<GenericBeatmapGridRow>): RowScope => {
	const difficulty = row?.difficultyDescription;
	const score = row?.scoreResponse;
	return {
		nps: difficulty?.nps ?? 0,
		njs: difficulty?.njs ?? 0,
		stars: difficulty?.stars ?? 0,
		predictedAcc: difficulty?.predictedAcc ?? 0,
		passStars: difficulty?.passRating ?? 0,
		accStars: difficulty?.accRating ?? 0,
		techStars: difficulty?.techRating ?? 0,
		notes: difficulty?.notes ?? 0,
		bombs: difficulty?.bombs ?? 0,
		walls: difficulty?.walls ?? 0,
		duration: difficulty?.duration ?? 0,

		baseScore: score?.baseScore,
		modifiedScore: score?.modifiedScore,
		accuracy: score?.accuracy,
		pp: score?.pp,
		bonusPp: score?.bonusPp,
		passPP: score?.passPP,
		accPP: score?.accPP,
		techPP: score?.techPP,
		rank: score?.rank,
		countryRank: score?.countryRank,
		fcAccuracy: score?.fcAccuracy,
		fcPp: score?.fcPp,
		weight: score?.weight,
		badCuts: score?.badCuts,
		missedNotes: score?.missedNotes,
		bombCuts: score?.bombCuts,
		wallsHit: score?.wallsHit,
		pauses: score?.pauses,
		fullCombo: score?.fullCombo,
		maxCombo: score?.maxCombo,
		maxStreak: score?.maxStreak,
		timepost: score?.timepost,
		playCount: score?.playCount,

		ranked: difficulty?.stars !== null,
	};
};
