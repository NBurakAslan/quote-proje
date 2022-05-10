import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
function NewQuote(props) {
  const history = useHistory();
  const addQuoteHandler = quoteObj => {
    console.log(quoteObj);
    history.push("/quotes");
  };
  return (
    <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>
  );
}

export default NewQuote;
