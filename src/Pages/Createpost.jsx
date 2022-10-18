import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Createpost() {
  const { register, handleSubmit } = useForm()
  const submitData = (data) => {

    console.log(data)

    axios.post("https://backend-skillup.herokuapp.com",data).then(()=>{console.log(response)})
    axios
      .post("https://backend-skillup.herokuapp.com",data)
      .then((response) => {
        console.log(response)
        alert(response.data.message)
      });
  
  };

 
  return (
    <div>
      <h2>POSTING</h2>
       <div>
      <form onSubmit={handleSubmit(submitData)}>
          <input type="text" name="title" {...register("title")} placeholder='Indicate your title' />
          <br />
          <br />
          <input type="text" {...register("userId")} placeholder='Indicate your id' />
          <br />
          <br />
          <textarea name="body" id="" cols="30" rows="10"  {...register("body")} placeholder='Indicate your posts'></textarea>
        
        </form>
        <br />
      <button type="submit">Submit</button>
    </div>
    </div>
  );
}

export default Createpost;
