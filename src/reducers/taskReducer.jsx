export const initialState = {
  isCreated: false,
  taskTitle: "",
  description: "",
  priority: "low",
  category: "",
  open: false,
  clicked: true,
  deadline: null,
};

// Action creators
export const setIsCreated = (payload) => ({ type: "SET_IS_CREATED", payload });
export const setTaskTitle = (payload) => ({ type: "SET_TASK_TITLE", payload });
export const setDescription = (payload) => ({
  type: "SET_DESCRIPTION",
  payload,
});
export const setPriority = (payload) => ({ type: "SET_PRIORITY", payload });
export const setCategory = (payload) => ({ type: "SET_CATEGORY", payload });
export const setOpen = (payload) => ({ type: "SET_OPEN", payload });
export const setClicked = (payload) => ({ type: "SET_CLICKED", payload });
export const setDeadline = (payload) => ({ type: "SET_DEADLINE", payload });

export function reducer(state, action) {
  switch (action.type) {
    case "SET_IS_CREATED":
      return { ...state, isCreated: action.payload };
    case "SET_TASK_TITLE":
      return { ...state, taskTitle: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SET_PRIORITY":
      return { ...state, priority: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_OPEN":
      return { ...state, open: action.payload };
    case "SET_CLICKED":
      return { ...state, clicked: action.payload };
    case "SET_DEADLINE":
      return { ...state, deadline: action.payload };
    default:
      throw new Error("unknown action");
  }
}
