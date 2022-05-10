import React from "react";
import {
  useParams,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlighteQuote from "../components/quotes/HighlightedQuote";
const DUMMY_DATA = [
  { id: "q1", author: "osman", text: "muthiş asdfas" },
  { id: "q2", author: "osman 3", text: "muthiş asdfas 3" },
  { id: "q3", author: "osman 2", text: "muthiş asdfas 2" },
];
function QuoteDetail(props) {
  const param = useParams();
  const match = useRouteMatch();
  const quote = DUMMY_DATA.find(
    quote => quote.id === param.quoteId
  );
  if (!quote) {
    return <p>No quote Found!</p>;
  }
  return (
    <>
      <HighlighteQuote
        text={quote.text}
        author={quote.author}
      ></HighlighteQuote>
      <Route path={match.path} exact>
        <div className='centered'>
          <Link
            className='btn--flat'
            to={`${match.url}/comments`}
          >
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </>
  );
}

export default QuoteDetail;
