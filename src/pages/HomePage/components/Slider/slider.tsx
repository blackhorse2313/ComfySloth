import './Slider.scss';
import picture1 from '../../../../assets/images/hero-bcg.a876f19f6786a3aca992.jpeg'
import picture2 from '../../../../assets/images/slider2.jpeg'


export const Slider = () => {
    return (
        <section id="slider">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-12">
                        <div className="left">
                            <h1>Design YourComfort Zone</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                            <button>Shop Now</button>
                        </div>
                    </div>
                    <div className="col-6 col-md-12">
                        <div className="right">
                            <div className="img1">  <img src={picture1} alt="img" />
                                <div className="img2"><img src={picture2} alt="img"/></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};
