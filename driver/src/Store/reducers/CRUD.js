const initialState = {
  branch: null,
  degree: null,
  category: null,
  noa: null,
  semester: null,
  activity: null,
  branches: [],
  degrees: [],
  categories: [],
  noas: [],
  semesters: [],
  activities: [],
  bin: null,
  bins: [],
  binType: null,
  binTypes: [],
  vehicle: null,
  vehicles: [],
  user: null,
  users: [],
};

const getAttribute = (resource) => {
  let attribute = "";
  switch (resource) {
    case "BRANCH":
      attribute = "branches";
      break;
    case "DEGREE":
      attribute = "degrees";
      break;
    case "CATEGORY":
      attribute = "categories";
      break;
    case "NOA":
      attribute = "noas";
      break;
    case "SEMESTER":
      attribute = "semesters";
      break;
    case "ACTIVITY":
      attribute = "activities";
      break;
    case "BIN":
      attribute = "bins";
      break;
    case "BINTYPE":
      attribute = "binTypes";
      break;
    case "VEHICLE":
      attribute = "vehicles";
      break;
    case "USER":
      attribute = "users";
      break;

    default:
      attribute = "";
  }
  return attribute;
};

const getData = (state, action) => {
  const [, resource] = action.type.split("_");
  let attribute = getAttribute(resource);

  return {
    ...state,
    [attribute]: action.data,
  };
};

// const createData = (state, action) => {
//   const [type, resource] = action.type.split("_");
//   let attribute = getAttribute(resource);

//   return {
//     ...state,
//     [attribute]: action.data,
//   };
// };

const reducer = (state = initialState, action) => {
  const [type, resource] = action.type.split("_");

  switch (type) {
    case "SINGLE":
      return {
        ...state,
        [`${resource.toLowerCase()}`]: action.singleData,
      };

    case "GET":
      return getData(state, action);

    // case "CREATE":
    //   return setIngredients(state, action);

    // case "UPDATE":
    //   return fetchIngredientsFailed(state, action);

    // case "DELETE":
    //   return fetchIngredientsFailed(state, action);

    default:
      return state;
  }
};

export default reducer;
