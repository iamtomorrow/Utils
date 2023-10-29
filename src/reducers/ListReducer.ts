import { Item } from "../Types/item";

type addAction = {
  type: "add";
  payload: {
    text: string;
  };
};

type editAction = {
  type: "edit";
  payload: {
    id: number;
    text: string;
  };
};

type toggleAction = {
  type: "toggle";
  payload: {
    id: number;
  };
};

type removeAction = {
  type: "remove";
  payload: {
    id: number;
  };
};

type ListActions = addAction | editAction | toggleAction | removeAction;

export const ListReducer = (list: Item[], action: ListActions) => {
  switch (action.type) {
    case "add":
      return [
        ...list,
        {
          id: list.length,
          text: action.payload.text,
          done: false
        }
      ];
    case "edit":
      return list.map((item) => {
        if (item.id === action.payload.id) {
          item.text = action.payload.text;
        }
        return item;
      });
    case "toggle":
      return list.map((item) => {
        if (item.id === action.payload.id) {
          item.done = true;
        }
        return item;
      });
    case "remove":
      return list.filter((item) => item.id !== action.payload.id);
    default:
      return list;
  }
};
