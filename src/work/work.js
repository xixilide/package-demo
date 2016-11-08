import React, { PropTypes } from 'react'
import Img1 from '../img/c7.jpg';
import Img2 from '../img/c1.jpg';
import Img3 from '../img/c2.jpg';
import Img4 from '../img/c6.jpg';


class Work extends React.Component {
  render () {
    return(
      <div className="work-container">


        <div className="work-card">
              <a href="https://xixilide.github.io/maisi.html"><img src={Img1} /></a>
                  <div className="work-text">
                    <h3>作品一：迈思设计</h3>
                    <p>2016.5.6</p>
                  </div>
                </div>

      <div className="work-card">
            <a href="http://model.100autoshow.com/"><img src={Img2} /></a>
                <div className="work-text">
                  <h3>作品二：模特大赛</h3>
                  <p>2015.10.6</p>
                </div>
              </div>

    <div className="work-card">
          <a href="http://www.cnpickups.com"><img src={Img3} /></a>
              <div className="work-text">
                <h3>作品三：皮卡网站</h3>
                <p>2016.1.5</p>
              </div>
    </div>

  <div className="work-card">
        <a href="http://www.elutongxing.com"><img src={Img4} /></a>
          <div className="work-text">
              <h3>作品四：ｅ路同行</h3>
              <p>2016.4.6</p>
        </div>
  </div>
</div>
    )
  }
}

export default Work;
