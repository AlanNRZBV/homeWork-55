interface IIngredient  {
  name: string,
  price: number,
  image: string
  onChangeCount?: (type: string, behavior: boolean, wipe: boolean) => void;
  sendCount?: (name: string) => number;
}

export interface ICounter {
  count: number | undefined;
}

interface ITopping {
  name: string,
  count: number
}

export interface IButton {
  innerText?: string;
  onClick: () => void;
  style?: string
}