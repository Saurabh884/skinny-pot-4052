import React from 'react'
import style from './careerpage.module.css';

const CareerPage = () => {
  return (
    <div className={style.careerFlex}>
        <div className={style.mustRead}>
            <div>
                <b>New in Job Search</b>
                <p>5 Must-Read Books for Accountants</p>
                <p>Team Monster - June 7, 2021</p>
            </div>
            <div>
                <img src="https://www.monsterindia.com/career-advice/wp-content/uploads/2021/06/account-book-218x150.jpg" />
            </div>
        </div>
        <div></div>
        <div></div>
     </div>
  )
}

export default CareerPage


