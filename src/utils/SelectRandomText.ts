export function selectRandomText(existantText: string[]) {
    const randomNumber: number = Math.floor(Math.random() * existantText.length);
    return existantText[randomNumber];
}