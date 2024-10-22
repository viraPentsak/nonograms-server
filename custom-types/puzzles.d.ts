declare module "puzzles" {

    type RGB = `rgb(${number},${number},${number})`;
    type HEX = `#${string}`;

    export type Color = RGB | HEX;
    export type TableCoords = {
        row: number;
        col: number;
    }

    export type CellFill = Color | "none" | undefined;
    export type CellMap = CellFill[][] | undefined[][];
    export type LegendType = "vertical" | "horizontal";
    export type LegendField = number[][];
    type LegendFields = Record<LegendType, LegendField>
    export type LegendSizeFields = Record<LegendType, { rows: number, cols: number }>

    export interface I_PuzzleLegend {
        size: { width: number, height: number },
        legend: LegendFields,
        legendSize: LegendSizeFields
    }

    export interface I_Puzzle extends I_PuzzleLegend {
        id: string,
        colors: Color[]
    }
}