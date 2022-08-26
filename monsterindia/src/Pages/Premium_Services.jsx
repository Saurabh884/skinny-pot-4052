import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Ps_header from '../Components/Ps_header';
import Ps_service_card from '../Components/Ps_service_card';
import { getAllServices } from '../Redux/AppReducer/action';
import styles from '../Ps_style/Ps_style.module.css';
import {
  InputGroup,
  FormLabel,
  InputLeftAddon,
  Button,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

const Premium_Services = () => {

  const dispatch = useDispatch();

  const getServicesData = ()=>{
    axios.get("http://localhost:8080/services")
    .then((res)=>{
      dispatch(getAllServices(res.data));
      //console.log(res.data);
    })
    .catch(err=>{
      console.log(err)
    })
  }

  const services = useSelector(state=>state.AppReducer.servicesData);

  console.log(services)

  useEffect(()=>{
    getServicesData()
  }, [])
  return (
    <div>
        <Ps_header/>
        <div className={styles.serviceCard_Container}>
          {
            services.map(ele=>{return <Ps_service_card id={ele.id} heading={ele.heading} image_url={ele.image_url} details={ele.detail} price={ele.price} key={ele.id}/>})
          }
        </div>
        <div className={styles.contactForm}>
              <div className={styles.staticContact}>
                <h3>Talk to our expert</h3>
                <div className={styles.contactImg}>
                <img  src="https://media.monsterindia.com/trex/public/default/images/career-services/career-contactUs/humanFig2.svg" alt="contact image" />
                </div>
                <h3 className={styles.toll}>Toll Free No: 1-800-4196666</h3>
                <h3 className={styles.toll}>Toll No: +91-40-66116611</h3>
              </div>
              <div className={styles.contact}>
                <h3>CONTACT US</h3>
                <h5>Our executive will get in touch with you soon</h5>
                <FormLabel>Name &nbsp;<span className={styles.req}>*</span></FormLabel>
                <Input className={styles.input} type='text' placeholder='Enter your full name' />
                <FormLabel>Email Id &nbsp;<span className={styles.req}>*</span></FormLabel>
                <Input className={styles.input} type='email' placeholder='Enter your email id'/>
                <FormLabel>Mobile No &nbsp;<span className={styles.req}>*</span></FormLabel>
                <InputGroup>
                  <InputLeftAddon className={styles.input} children='+91' />
                  <Input className={styles.input} type='tel' placeholder='Enter your phone number' />
              </InputGroup>
              <Button className={styles.formButton} colorScheme='purple'>Call me back</Button>
              </div>
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default Premium_Services