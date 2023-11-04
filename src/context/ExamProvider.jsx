import { useContext, createContext, useReducer } from "react";

const ExamContext = createContext();
const ExamContextDispatch = createContext();

const initialState = {
  exam: [],
};

const examReducer = (state, action) => {
  switch (action.type) {
    case "EXAM":
      return {
        ...state,
      };

    default:
      state;
  }
};

const ExamProvider = ({ children }) => {
  const [exam, dispatch] = useReducer(examReducer, initialState);

  return (
    <ExamContext.Provider value={exam}>
      <ExamContextDispatch.Provider value={dispatch}>
        {children}
      </ExamContextDispatch.Provider>
    </ExamContext.Provider>
  );
};

export default ExamProvider;

export const useExam = () => useContext(ExamContext);
export const useExamDispatch = () => useContext(ExamContextDispatch);
