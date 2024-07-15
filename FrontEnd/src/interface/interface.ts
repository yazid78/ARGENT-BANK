export default interface GameState {
    player1: number;
    player2: number;
    advantage: string | null;
    winner: string | null;
    playing: boolean;
    restart: boolean;
}