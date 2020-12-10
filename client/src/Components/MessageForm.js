import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { Button } from "react-bootstrap";


const CREATE_MESSAGE = gql`
  mutation CreateMessage($title: String!, $content: String!, $author: String!) {
    createMessage(title: $title, content: $content, author: $author) {
      _id
    }
  }
`;


function MessageForm() {

    const [content, setContent ] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const [createMessage] = useMutation(CREATE_MESSAGE)

  return (
    <div className="row">
      <div className="col-md-6 offset-3">
        <div className="card">
          <div className="card-body">
            <form>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  className="form-control"
                  value={author}
                  onChange={e => setAuthor(e.target.value)}
                ></input>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title..."
                  className="form-control"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                ></input>
              </div>

              <div className="form-group">
                <textarea
                  placeholder="Write a Message"
                  rows="2"
                  className="form-control"
                  value={content}
                  onChange={e => setContent(e.target.value)}
                ></textarea>
              </div>

              <Button variant="dark" onClick={async(e) => {
                  e.preventDefault()
                  await createMessage({variables: {title, author, content}})
                  window.location.href ='/'

              }} >Save Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageForm;
