import "./HomePage.css";
import HomeSlider1 from "../Slider/HomeSlider1";
import HomeSlider2 from "../Slider/HomeSlider2";


function HomePage() {
    
    return (
        <>
            <div className='home-container'>
                <div className='hometopdiv'>
                   <p>500,000+ Jobs. Find Better. Faster</p>
                    <div className='home-main1'>
                        <div className='home-inner1'>
                            <div style={{display:"flex", justifyContent:"space-between",margin:"17px 30px 0 30px"}}>
                                <div style={{borderBottom:"2px solid white"}}>All Jobs</div>
                                <div>Work From Home</div>
                                <div style={{backgroundColor:"#ec167f",height:"25px"}}>TRIUMPH Jobs</div>
                                <div>Contract Jobs</div>
                                <div>Fresher Jobs</div>
                            </div>

                            <div style={{margin:"20px 10px 0 "}}>
                                <input style={{height:"40px",width:"440px",border:"1px solid black",margin:"15px 0 0 20px"}} type="text" placeholder=' 🔍 Search by Skills, Company & Job Title                                             🔊' />
                                <button style={{height:"40px",width:"120px",backgroundColor:"#5c4da8",color:"white"}}>Search</button>
                            </div>

                            <div style={{fontSize:"14px",margin:"20px 0 0 480px",cursor:"pointer"}}>Advanced Search</div>

                            <div style={{display:"flex",margin:"5px 0 0 20px"}}>
                                <div style={{fontSize:"15px"}}>Trending Searches : </div>
                                <div style={{fontSize:"14px",width:"430px",paddingLeft:"5px"}}> Jobs in Delhi, Jobs in Mumbai, Jobs in Hyderabad, Jobs in Bangalore, Jobs in Chennai, Jobs in Pune, Jobs in Kolkata,Jobs in Lucknow
                                </div>
                            </div>
                        </div>

                    <div className='home-main2'>
                            <div className='home-inner2'>
                                <h4 style={{color:"black",fontSize:"14px", fontWeight:"bold",margin:"20px 20px 20px 55px"}}>NEW TO MONSTER</h4>
                                <div style={{color:"#6159b0",fontSize:"14px", fontWeight:"bold",margin:"20px 20px 20px 55px"}}>REGISTER WITH US</div><hr/>
                                <div style={{color:"black",textAlign:"center"}}>Or</div>
                                
                                <div style={{margin:"15px 15px 15px 15px",textAlign:"center",height:"53px",
                                    width:"200px",backgroundColor:"rgb(244,135,34)",cursor:"pointer"}}>
                                    <div style={{fontWeight:"bold",color:"white",paddingTop:"5px"}}>UPLOAD RESUME</div>
                                    <div style={{color:"white",paddingTop:"1px"}}>We will create your profile</div>
                                </div>
                            </div>

                            <div className='home-inner2'>
                                <h4 style={{color:"black",fontSize:"14px", fontWeight:"bold",margin:"10px 20px 20px 55px"}}>FREE JOB ALERT</h4>
                                <div style={{color:"#6159b0",fontSize:"14px", fontWeight:"bold",margin:"20px 20px 20px 55px"}}>Get an email on jobs matching your criteria</div><hr/>
                                
                                <div style={{color:"black",textAlign:"center"}}>No registration required</div>
                                <div style={{margin:"15px 15px 15px 15px",textAlign:"center",height:"47px",
                                    width:"200px", backgroundColor:"white",border:"1px solid rgb(92,77,168)",cursor:"pointer"}}>
                                    <div style={{fontWeight:"bold",color:"white",paddingTop:"12px",color:"rgb(92,77,168)"}}>CREATE JOB ALERT</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               

                <HomeSlider1/>

                <div style={{display:"flex"}}>
                    <div>
                        <div style={{display:"flex",gap:"30px",height:"120px",width:"900px",margin:"10px 0 0 140px",backgroundColor:"#f8e7af",boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
                            <div><img style={{height:"110px", width:"200px",margin:"10px 0 0 0"}} src="https://media.monsterindia.com/trex/public/default/images/cs-banner-budge-1.png" alt="" /></div>
                            <div style={{margin:"30px 0 0 0"}}>
                                <div style={{fontSize:"20px",fontWeight:"bold"}}>What it feels like to have 48% more interview calls</div>
                                <div>To get 5x more recruiter views on your profile</div>
                            </div>
                        </div>
                    </div>
                </div>

                <HomeSlider2/>




            </div>

        </>
    )
}

export default HomePage;