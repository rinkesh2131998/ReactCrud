import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { axiosApi } from "../util/axiosConfig";

export default function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [count, setCount] = useState("");
  const [googleId, setGoogleId] = useState("");

  const postData = async () => {
    const data = {
      title: title,
      description: description,
      count: count,
      googleLink: googleId,
    };

    await axiosApi.post("api/books/add", data).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <Form className="create-form">
      <Form.Field>
        <label>Title</label>
        <input
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Count</label>
        <input
          placeholder="Count"
          type="number"
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Google Book Link</label>
        <input
          placeholder="Google Book Link"
          onChange={(e) => {
            setGoogleId(e.target.value);
          }}
        />
      </Form.Field>
      <Button type="submit" onClick={postData}>
        Submit
      </Button>
    </Form>
  );
}
