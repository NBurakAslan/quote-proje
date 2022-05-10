import React from "react";
import QuoteList from "../components/quotes/QuoteList";
const DUMMY_DATA = [
  { id: "q1", author: "osman", text: "muthiş asdfas" },
  { id: "q2", author: "osman 3", text: "muthiş asdfas 3" },
  { id: "q3", author: "osman 2", text: "muthiş asdfas 2" },
];
function AllQuotes(props) {
  return <QuoteList quotes={DUMMY_DATA}></QuoteList>;
}

export default AllQuotes;
