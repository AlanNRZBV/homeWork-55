interface IIngredient {
  name: string;
  image: string;
  onChangeCount?: (type: string, behavior: boolean, wipe: boolean) => void;
  sendCount?: (name: string) => number;
}

export interface ICounter {
  count: number | undefined;
}

interface ITopping {
  name: string;
  count: number;
  price: number;
}

export interface IButton {
  innerText?: string;
  onClick: () => void;
  style?: string;
}

export interface IBill {
  total: number
}
