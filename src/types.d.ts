interface IIngredient  {
  name: string,
  price: number,
  image: string
  onChangeCount?: (type: string, behavior: boolean) => void;
  count?: number
}

export interface ICounter {
  count: number;
}

interface ITopping {
  name: string,
  count: number
}

export interface IButton {
  innerText: string;
  onClick: () => void;
}