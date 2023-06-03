import type { BeatmapGridRow } from '$lib/BeatmapGrid.svelte';
import type { ICellRendererFunc, ValueFormatterFunc } from 'ag-grid-community';
import { isNil } from 'lodash-es';


export const songLinkCellRenderer: ICellRendererFunc<BeatmapGridRow> = (params) => {
  if (isNil(params.data)) {
    return '';
  }
  let data: BeatmapGridRow = params.data
  return `<a target="_blank" rel="noopener noreferrer" href="https://www.beatleader.xyz/leaderboard/global/${data.leaderboardInfo.id}/1">${data.leaderboardInfo.song?.name}</a>`
}

export const formatFixedDecimal: (digits: number) => ValueFormatterFunc<number> = (digits) => (params) => {
  const numberFormat = new Intl.NumberFormat(undefined, { minimumFractionDigits: digits, maximumFractionDigits: digits })
  return numberFormat.format(params.value)
}


const numberFormatTwoDecimal = new Intl.NumberFormat(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
export const formatPercentage: ValueFormatterFunc<number> = (params) => {
  return `${numberFormatTwoDecimal.format(100 * params.value)}%`
}
