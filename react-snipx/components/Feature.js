import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section id="features" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Features</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Easy Snippet Management</h5>
                <p className="card-text text-white">Organize and manage your code snippets effortlessly.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Syntax Highlighting</h5>
                <p className="card-text text-white">View your code with beautiful syntax highlighting.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Share and Collaborate</h5>
                <p className="card-text text-white">Share your snippets and collaborate with others.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
