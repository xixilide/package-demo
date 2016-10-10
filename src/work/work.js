import React, { PropTypes } from 'react'
import Img1 from '../img/1.jpg';
import Img2 from '../img/2.jpeg';
import Img3 from '../img/3.jpeg';


class Work extends React.Component {
  render () {
    return(
      <div className="work-container">


        <div className="work-card">
              <a href="https://xixilide.github.io/"><img src={Img1} /></a>
                  <div className="work-text">
                    <h3>作品一</h3>
                    <p>2016.5.6</p>
                  </div>
                </div>

      <div className="work-card">
            <a href="http://model.100autoshow.com/"><img src="http://img4.duitang.com/uploads/item/201510/18/20151018120957_W3AGU.jpeg" /></a>
                <div className="work-text">
                  <h3>作品二</h3>
                  <p>2015.10.6</p>
                </div>
              </div>

    <div className="work-card">
          <a href="http://www.cnpickups.com"><img src={Img2} /></a>
              <div className="work-text">
                <h3>作品三</h3>
                <p>2016.1.5</p>
              </div>
    </div>

  <div className="work-card">
        <a href="http://www.cnpickups.com"><img src="http://img5.duitang.com/uploads/item/201507/15/20150715012629_LQ4T5.jpeg" /></a>
          <div className="work-text">
              <h3>作品四</h3>
              <p>2016.4.6</p>
        </div>
  </div>
</div>
    )
  }
}

export default Work;
