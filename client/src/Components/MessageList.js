import React from "react";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Button } from "@material-ui/core";

const GET_MESSAGES = gql`
  {
    messages {
      _id
      title
      content
      author
    }
  }
`;

const DELETE_MESSAGES = gql`
  mutation DeleteMessage($_id: String!) {
    deleteMessage(_id: $_id) {
      _id
    }
  }
`;





function MessageList() {
  const [deleteMessage] = useMutation(DELETE_MESSAGES);


  const { loading, error, data } = useQuery(GET_MESSAGES);
  if (loading) return <p>Loading pa...</p>;
  if (error) return error;

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {data.messages.map(({ _id, title, content, author, date }) => (
          <div key={_id} className="card m-2">
            <div className="card-body">
              <h1 className="display-3">{title}</h1>
              <p>{content}</p>
              <p>{author}</p>
              <Button
                variant="contained"
                color="secondary"
                onClick={async (e) => {
                  e.preventDefault();
                  await deleteMessage({ variables: { _id } });
                  window.location.href = "/";
                }}
              >
                Delete
              </Button>

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageList;
