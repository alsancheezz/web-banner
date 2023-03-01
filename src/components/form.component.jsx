import './form.styles.css'

const Form = () => {
  return(
    <div className="form">
      <div className='form-left'>
        <h2>SCHEDULE A DEMO</h2>
        <p>Learn More About FloQast</p>
      </div>
      <div className='form-right'>
        <div  className='form-text'>
        <span>
          Learn How FloQast Can
        </span>
        <span className='green-text'>
          Improve Your Month-End
        </span>
        </div>
        <div className='form-input'>
          <input placeholder='First Name*'></input>
          <input placeholder='Last Name*'></input>
          <button className='sched-button'>SCHEDULE NOW</button>
        </div>
      </div>
    </div>

  )

}

export default Form