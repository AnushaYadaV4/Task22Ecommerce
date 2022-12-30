
import './SocialMedias.css';
const SocialMedias=()=>{
    return(
        <div className="follow-us-section pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="follow-us-section-heading">Follow Us</h1>
          </div>
          <div className="col-12">
            <div className="d-flex flex-row justify-content-center">
              <div className="follow-us-icon-container">
                <i className="fab fa-twitter icon"></i>
              </div>
              <div className="follow-us-icon-container">
                <i className="fab fa-instagram icon"></i>
              </div>
              <div className="follow-us-icon-container">
                <i className="fab fa-facebook icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
}

export default SocialMedias;