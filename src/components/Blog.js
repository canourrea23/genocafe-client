// posts and news
import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = (props) => {
  const [blog, setBlog] = useState({
    email: "",
    image: "",
    user: "",
    description: "",
  });
  const getBlog = async () => {
    const { id } = props.match.params;
    try {
      const res = await axios.get(`/api/blog/${id}`);
      setBlog(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBlog();
  }, []);
  return (
    <div>
      <h1>Diga Algo</h1>
      <Form action="/authors" method="POST" />
      <div class="form-group">
        <label for="bio">Bio</label>
        <textarea
          type="text"
          class="form-control"
          id="bio"
          name="bio"
          required
        ></textarea>
      </div>
      <button type="submit" value="Submit">
        Enviar
      </button>
    </div>
  );
};

export default Blog;
