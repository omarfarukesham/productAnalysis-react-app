import React from "react";

const Blogs = () => {
  return (
    <div>
        <h1 className="text-primary text-center">Common FnQ</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is Context API #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <h5>
                  In React, data passing explicitly from parent component to child components through props, is very 
                  popular and effective one. To pass data into complex application, props drillings make the code more
                  complex.To avoid props drillings, context api in React truely an efficient processs in which, data passing
                  parent to child or child to parents make more ease and perfect, that's Context Api.Data in an application of 
                  React liberately can moving whenever needed, just following simple steps.
              </h5>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             What is Sementic tags  #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
             Self describing tags normally called as a Semantic Tags. In Markup Language a lot of Semantic tags help programers to 
             write code directly. The elements like header, table, form, article ..... etc. The main benefits of those 
             elements are easy maintainable, readable, well structured tags.These tags are helped better user experience.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What is Block, inline, inline block elements #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
             <p> Block elements, elements appear on the screen as if they have a line break 
             before and after them. For example, the p, h,ul, ol, dl, hr, address ... etc elements are all block
             level elements. On the other hand, those elements who are not block the 
             avialable width from next to their position. for instance, span tag is a inline elements.</p>

            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Blogs;
