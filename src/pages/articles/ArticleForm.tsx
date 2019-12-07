import React from 'react';

const ArticleForm: React.FC = () => {
  return(
    <div className="uk-child-width-expand@s" data-uk-grid>
      <div className="uk-card uk-card-default uk-card-body uk-width-4-6">
        <h2 className="uk-text-center">New article</h2>
        <form>

          <div data-uk-grid>
            <div className="uk-width-1-2">
              <label className="uk-form-label" htmlFor="titleInput">Title</label>
              <div className="uk-form-controls">
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: file-text"></span>
                  <input type="text" name="title" id="titleInput"
                    className="uk-input" required minLength={2} maxLength={55} />
                </div>
              </div>
            </div>
          </div>

          <div data-uk-grid>
            <div className="uk-width-1-2">
              <label className="uk-form-label" htmlFor="categoryInput">Category</label>
              <div className="uk-form-controls">
                <select name="category" id="categoryInput" className="uk-select" required>
                  <option disabled selected>Please choose one</option>
                  <option value="34345454545">Sales</option>
                  <option value="32221121233">DevOps</option>
                </select>
              </div>
            </div>
          </div>

          <div data-uk-grid>
            <div className="uk-width-1-2">
              <label className="uk-form-label" htmlFor="textInput">Text</label>
              <div className="uk-form-controls">
                <input type="text" name="text" id="textInput"
                  className="uk-input" required minLength={30} maxLength={300} />
              </div>
            </div>
          </div>

          <div className="uk-margin uk-flex uk-flex-right">
            <button className="uk-button uk-button-primary" type="submit">
              <div data-uk-spinner></div>&nbsp;
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  )
};

export default ArticleForm;