import "../css/Wemakeever.css";

import imagwerone from "../../Picture/pic-we-1.jpg";
import imagwertw from "../../Picture/pic-we-2.jpg";
import imagwerthre from "../../Picture/pic-we-3.jpg";
import imagwerfou from "../../Picture/pic-we-4.jpg";
const Wemakeever = () => {
  return (
    <div className="Wemakeever py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mb-4 mb-md-0">
            <div className="text">
              <h2>
                We Make Every Thing By Hande With Best Possible Integratings
              </h2>
              <p className="py-2 mainp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                recusandae pariatur perferendis voluptatem aut aliquam delectus
                iure molestiae laborum neque velit nam deleniti voluptas sint,
                voluptatibus quas laboriosam sapiente vitae magnam! Deserunt,
                excepturi libero dolorem quisquam incidunt illo tenetur illum
                totam dolorum similique necessitatibus, inventore facilis nihil,
                eos optio deleniti eveniet. Tempore laboriosam minus maiores
                consequuntur sint dicta voluptatibus numquam!
              </p>
              <p>
                {" "}
                <i className="fa-solid fa-check me-1 fw-bold fs-5 text-danger"></i>{" "}
                React Website Using Styled Components{" "}
              </p>
              <p>
                <i className="fa-solid fa-check me-1 fw-bold fs-5 text-danger"></i>{" "}
                Responsive Ecommerce Restaurant Responsive{" "}
              </p>
              <p className="pb-2">
                {" "}
                <i className="fa-solid fa-check me-1 fw-bold fs-5 text-danger"></i>
                Responsive Ecommerce Restaurant{" "}
              </p>
              <button type="button" className="btn btn-danger">
                More..
              </button>
            </div>
          </div>
          <div className="col-md-7">
            <div className="fidivima">
              <div className="immgo">
                <img src={imagwertw} alt="aaaa" />
              </div>
              <div className="immgt">
                <img src={imagwerone} alt="aaaa" />
              </div>
            </div>
            <div className="secdivimag">
              <div className="immgth">
                <img src={imagwerthre} alt="aaaa" />
              </div>
              <div className="immgfou">
                <img src={imagwerfou} alt="aaaa" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wemakeever;
