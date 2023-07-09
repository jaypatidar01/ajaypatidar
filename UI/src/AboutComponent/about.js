import './about.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
function About(){
    const[postDetails, setPostDetails]= useState([]);
    useEffect(()=>{
        const api_url="https://jsonplaceholder.typicode.com/posts";
        axios.get(api_url).then((response)=>{
            //console.log(response .data);
            setPostDetails(response.data);
        }).catch((error)=>{
                console.log(error);
            

        });
    });
  return(
    <>
       {/*About Start */}
       <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6">
                        <h6 class="section-title text-start text-primary text-uppercase">About Us</h6>
                        <h1 class=" display-5 mb-4">post Details</h1>
       
            
                        <table class="table table-bordered">
                            <tr>
                                <th>User Id</th>
                                <th>Id</th>
                                <th>Tittle</th>
                                <th>Body</th>
                            </tr>
                            {
                                postDetails.map((row)=>(
                                    <tr>
                                        <td>{row.userid}</td>
                                        <td>{row.id}</td>
                                        <td>{row.title}</td>
                                        <td>{row.body}</td>
                                    </tr>
                                ))
                            }
                        </table>
</div>
</div>
</div>
</div>
{/*About End*/}
    </>
  );
}

export default About;

    
