import React from 'react'
import "./TvShow.scss"
import  {  useState } from 'react'
import axios from 'axios';



const MovieForm = () => {
  let [formData, setFormData] = useState({
    original_title: '',
    original_language: '',
    overview: '',
    popularity: '',
    release_date: '',
    image:null
  });

  const handleChange = (e) =>  {
   
    if (e.target.type === 'file') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  let formDataWithImage = new FormData();
  for (const key in formData) {
    formDataWithImage.append(key, formData[key]);

  }
  formDataWithImage.append("data", {original_title:formData["original_title"],original_language:formData["original_language"],overview:formData["overview"]});


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log(formData);
      const response = await axios.post('http://localhost:9000/EnterMovie',formDataWithImage, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log(response.data);
      // Handle success or redirect to another page
    } catch (error) {
      console.error('Error sending data:', error);
      // Handle error
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Original Title:
        <input type="text" name="original_title" value={formData.original_title} onChange={handleChange} />
      </label>
      <br />
      <label>
        Original Language:
        <input type="text" name="original_language" value={formData.original_language} onChange={handleChange} />
      </label>
      <br />
      <label>
        Overview:
        <textarea name="overview" value={formData.overview} onChange={handleChange} />
      </label>
      <br />
      <label>
        Popularity:
        <input type="text" name="popularity" value={formData.popularity} onChange={handleChange} placeholder='popularity' />
      </label>
      <br />
      <label>
        
        <input type="text" name="release_date" value={formData.release_date} onChange={handleChange} />
      </label>
      <br />
      <label>
        
        <input
          type="file"
          name="image"
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default MovieForm;
